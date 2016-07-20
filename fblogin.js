// FB LOGIN FOR UTM UNTANGLE
// BY YUAN YUDISTIRA - yudistira@candradimuka.id


// START CONFIG
//Facebook App Access Need a valid domain
var UntanglePublishDomain = "utmho.yourdomain.com";  //Please change this with yours
var SpecificAPPID = '1068026436624490'; //Please change this with yours
var appIDcaptive = 85; //please change it based on captive portal appID
// END CONFIG



//redirect URL setup
var protokol = window.location.protocol; 
var originalURL =  window.location.host; 
var originalPath = window.location.pathname; 
var query = window.location.search.substring(1);
var newFULLURL = protokol+"//"+UntanglePublishDomain+originalPath+"?"+query;

//THIS newFULLURL will be used as HTTP:referer, in Captive Rule By Pass, anything that has this referer will be passed.
var newFULLURLWithoutQuery = protokol+"//"+UntanglePublishDomain+originalPath+"?appid="+appIDcaptive;

//Redirect User if its not using a register valid domain
if (originalURL != UntanglePublishDomain) {
   window.location.href = newFULLURLWithoutQuery; 
}
  



//This button is trigger by a button  step 1
function checkFacebookLogin() 
{

//initiate FB login
//initiateFBLogin();

console.log('Tombol  step 1 di tekan.... ');
//console.log(response);

FB.getLoginStatus(function(response) {
console.log('in FB getLoginStatus function.... ');

     if (response.status === 'connected') {
          // Logged into your app and Facebook.

          //Display button to login to UTM  
          console.log('status response connected... ');
          var submit2 = document.getElementById("submit2");
          var submit = document.getElementById("submit");
          
          console.log('tombol submit di hide... ');
          submit.style.display  = "none";
          console.log('tombol step 2 di show... ');
          submit2.style.display  = "inline";


          FB.api('/me?fields=name,email', function(response) {
                  console.log('Successful login for: ' + response.name);
                  
                  //Update The FORM HIDDEN FIELD username with FB Name and Email,
                  //So i hope it will not seen as anonymous
                  var username = document.getElementById("username"); 
                  var Username = document.getElementById("Username"); 
                  username.value='FB/'+response.name+';Email:'+response.email;
                  Username.value='FB/'+response.name+';Email:'+response.email;
              });

      } else if (response.status === 'not_authorized') {

       
          // The person is logged into Facebook, but not your app.
          console.log('status response not_authorized... ');
          //Show a button to trigger FB Authorize button
          var submit2 = document.getElementById("submit2");
          var submit = document.getElementById("submit");
          submit2.style.display  = "none";
          submit.style.display  = "inline";

      } else {

         console.log('status response unkonwn... ');
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.

          //Show a button to trigger FB Authorize button

          //initiate a FB Login Dialog
          initiateFBLogin();

      }
     }, true); // add additional true parameter.
}

function initiateFBLogin()
{
FB.login(function(response) {
   fetchUserDetail();
 }, {scope: 'email,user_likes'});
//  }, {scope: 'email,user_likes'});
}




  // Below code is from FB Example	
  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : SpecificAPPID,  //Please change this to your appID
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : false,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  //FB.getLoginStatus(function(response) {
  //  statusChangeCallback(response);
  //});

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));




//============================
//Below code, not Fucntional Yet
//=======================

  function updateUserStatus()
    {
          var body = 'I am using Free Internet Access!';
          FB.api('/me/feed', 'post', { message: body }, function(response) {
            if (!response || response.error) {
              alert('Error occured');
            } else {
              alert('Post ID: ' + response.id);
            }
          });
    }