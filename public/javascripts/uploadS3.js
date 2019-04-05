const bucketName = 'rangoonzay';
var bucketRegion = 'ap-southeast-1';
var IdentityPoolId = 'ap-southeast-1:5d6ed864-44e5-4048-88b4-ebded5da97be';

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

const s3 = new AWS.S3({ 
    apiVersion: '2006-03-01', 
    params: { Bucket: bucketName }
});

function addPhoto() { 
    let files = document.getElementById('photoupload').files;
    let file = files[0];
    let fileName = file.name;
    console.log(fileName);
    console.log(bucketName);
    s3.upload({ 
        Key: 'oopsie', 
        Body: file, 
        ACL: 'public-read'
    }, function(err, data) { 
        alert('Uploaded'); 
        console.log('id: ', data);
    });
}
