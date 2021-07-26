function isTouching(obs1, snake1) {
  if ((obs1.body.position.y - snake1.body.position.y < 30 / 2 + s1 / 2)
  && (snake1.body.position.y - obs1.body.position.y < 30 / 2 + s1 / 2)
  && (obs1.body.position.x - snake1.body.position.x < 30 / 2 + s1 / 2)
  && (snake1.body.position.x - obs1.body.position.x < 30 / 2 + s1 / 2)) {

    return true;
  }
  else {
    return false;
  }
}