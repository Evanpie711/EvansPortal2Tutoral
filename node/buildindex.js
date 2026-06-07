#!/usr/bin/env node

const fs = require('node:fs/promises');
const path = require('node:path');



const docsource = "../docs/docsrc/";
const indexdir = "../docs/index/index.json";

var indexjson = {};
var currentid = 0;



buildindex();




function addtoindex(objpath){
    
    return fs.stat(objpath,) 
    .then(stats => {

        var cutpath = objpath.replace("../docs", "");
        if (stats.isFile()){
            currentid++;
            indexjson[currentid] = {}

            console.log(objpath + ' is a file');

            if(path.extname(objpath)=='.md'){
                console.log(objpath + ' is a md file :D');

                indexjson[currentid]["location"] = cutpath;
                indexjson[currentid]["name"] = path.basename(cutpath, path.extname(objpath));
                indexjson[currentid]["path"] = path.dirname(cutpath);
                indexjson[currentid]["type"] = 'file';
                indexjson[currentid]["ext"] = path.extname(cutpath); 
            } 
            else {
                console.error(objpath + 'is not an md file');
            }

        }
        else if (stats.isDirectory()){
            currentid++;
            indexjson[currentid] = {}
            console.log(objpath + ' is a directory');

            

            indexjson[currentid]["location"] = cutpath;
            indexjson[currentid]["name"] = path.basename(cutpath);
            indexjson[currentid]["path"] = path.dirname(cutpath);
            indexjson[currentid]["type"] = 'folder';
        }
        else {
            console.error(objpath + ' is not a directory or file');
        }

        
    })
    .catch(err => {
      console.error(err);
      return;
    });
}


async function buildindex(){
    console.log("--Building index--\n\n");

    try {
        
        const files = await fs.readdir(docsource, { recursive: true });
        for (const currentfile of files) {
            await addtoindex(docsource + currentfile);
        }
        console.log('\n\nindex:');
        console.log('\n'+JSON.stringify(indexjson))

        console.log('\n\n--index is now built--')

        fs.writeFile(indexdir, JSON.stringify(indexjson, null, " "), err => {
        if (err) {
            console.error(err);
        } else {

            
            return;
        }
});
    }   
    catch (err) {
        console.error(err);
    }    

    


}