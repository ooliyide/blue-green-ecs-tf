const AWS=require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = function(event, context, callback){

    let scanningParams = {
        TableName : 'Dynamo_api-lambda-db'
    };


    docClient.scan(scanningParams,function(err,data){
        if (err){
            callback(err, null);
        }else{
            
            callback(null,data.Items);
        }

    });


};