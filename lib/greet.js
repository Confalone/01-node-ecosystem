function greet(name) {

  if (typeof name !== 'string') {
    return null;
  }
  return 'hello ryo';
}

module.exports=greet;
