/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */

function processPosts(posts) {
  return posts.map((currObj) => {
    const {
      postId,
      author: postAuthor,
      commentsQty: postCommentsQty = 0,
    } = currObj;

    return {
      postId: postId + 1000,
      postAuthor,
      postCommentsQty,
    };
  });
}

const testPosts = [
  {
    postId: 234,
    author: "robd",
    commentsQty: 5,
  },
  {
    postId: 823,
    author: "sady",
  },
  {
    postId: 161,
    author: "merryl",
    commentsQty: "",
  },
];

const processedPosts = processPosts(testPosts);
console.log(processedPosts);
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts);
// оригинальный массив должен остаться без изменений
