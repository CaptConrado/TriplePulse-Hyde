
var endpoint="http://65.75.37.132:9876/posts";var hashNav={'#athletes':'athletes','#tips':'tips','#science':'science','#results':'results'}
var page=1;$(document).ready(function(){setCategory();getPosts();$('#loadMore').click(function(event){event.preventDefault();$.get(endpoint,{'page':page},function(response){appendPosts(dummyresponse.data);handleStatus(response.status);page++;});});$('.post').fancybox({'transitionIn':'none','transitionOut':'none','type':'iframe','maxWidth':820,'maxHeight':500});$(window).bind('hashchange',function(){setCategory();$('.post').removeClass('hide');if(typeof(visibleCategory)!='undefined'){$('.post').hide();$('.post.'+visibleCategory).show();}else{$('.post').show();}
$('#posts').masonry('reload');});});function getPosts(){$.get(endpoint,{'page':page},function(response){displayPosts(dummyresponse.data);handleStatus(response.status);});page++;}
function displayPosts(entries){
$('#posts').empty();$.each(entries,function(key,entry){var postHTML=makePostHTML(entry);$(postHTML).appendTo('#posts').css({width:entry.image.width}).data({'url':entry.link,'category':entry.classification}).children('.leadImage').css({width:entry.image.width,height:entry.image.height});});$('#posts').masonry({itemSelector:'.post:visible',columnWidth:20,isAnimated:true,animationOptions:{duration:400},isFitWidth:true})}
function handleStatus(status){ if(status==1){$('#loadMore').show();}else{$('#loadMore').fadeOut();}}
function appendPosts(entries){
$.each(entries,function(key,entry){var postHTML=makePostHTML(entry);$(postHTML).appendTo('#posts').css({width:entry.image.width,opacity:0}).addClass('appended').data({'url':entry.link,'category':entry.classification}).children('.leadImage').css({width:entry.image.width,height:entry.image.height});});var newPosts=$('.appended');newPosts.removeClass('appended').animate({opacity:1});$('#posts').masonry('appended',newPosts,true);}
function makePostHTML(entry){
if(typeof(visibleCategory)!='undefined'&&entry.classification!=visibleCategory){entry.display='hide';}else{entry.display='';}
var postHTML='<a href="'+entry.link+'" class="post '+entry.classification+' '+entry.display+'"><img class="leadImage" src="'+entry.image.url+'" /><div class="title">'+entry.titleText+'</div><div class="bodyText">'+entry.bodyText+'</div></a>';return postHTML;}
function setCategory(){
visibleCategory=hashNav[window.location.hash];$('.header .nav a.text').removeClass('active');$('.header .nav a.text.'+visibleCategory).addClass('active');}