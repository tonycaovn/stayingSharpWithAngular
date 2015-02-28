var newLlamaRecruit = {
  llamaOne: 'Larry Llama'
};
$http({method:'post',url:'/llamas.json',data:newLlamaRecruit});

