module.exports = () => {
  const data = {
    friends: [],
  }

  for (let index = 0; index < 600; index++) {
    data.friends.push({
      id: index+1,
      likes: 5,
      name: `Mais que amigos friends ${index+1}`
    })
  }

  return data;
}