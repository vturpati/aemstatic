import * as request from 'sync-request';

export class PageResquest {
    public username:string = "admin";
    public password:string = "admin";
    public auth :string;
    constructor(){

     this.auth = "Basic " + new Buffer(this.username + ":" + this.password).toString("base64");
    }
    aemjson(url){
        //console.log("url  "+url);
        var res = request.default('GET', url, {
          headers: {
            'Authorization': this.auth,
          },
        });
        return res.getBody('utf8');
        }

        pagejson(url){
            //console.log("url  :: "+url);
            var component = this.aemjson(url+".1.json");
            var componentjson = JSON.parse(component);
            var finaljson :LooseObject = {};
            if (componentjson.hasOwnProperty("jcr:primaryType")) {
                if(componentjson["jcr:primaryType"] == "cq:Page"){
                    url = url+"/jcr:content";
                    var pagecomponent = this.aemjson(url+".1.json");
                    var componentjson = JSON.parse(pagecomponent);
                }
            }
            
            if (componentjson.hasOwnProperty("sling:resourceType")) {
                finaljson.feName = componentjson["sling:resourceType"];
                //finaljson.props = componentjson;
            }
            //console.log("final  :: "+JSON.stringify(finaljson));
            var props ={};
            var children = [];
            for (var property in componentjson) {
                if (componentjson.hasOwnProperty(property)) {
                    if (typeof componentjson[property] == "object" &&  !Array.isArray(componentjson[property]) ) {
                        var subjson =this.pagejson(url+"/"+property);	
                        children.push(subjson);
                    }
                    else{
                       // console.log(" property "+property + " value is "+ componentjson[property]);
                        props[property.replace(':',"_")]= componentjson[property];
                        }
                }
                
            }
            //console.log(JSON.stringify(props))
            finaljson.props = props;
            if(children.length > 0 ){
            finaljson.props.children = children;
            }
        
            return finaljson;
        }
}

interface LooseObject {
    [key: string]: any
}