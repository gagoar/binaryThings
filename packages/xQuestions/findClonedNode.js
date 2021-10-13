//Given a node from a DOM tree find the node in the same position from an identical DOM tree. See diagram below for clarity.
// A         B
//
// O        O
// |\       |\
// O O      O O
//  /|\      /|\
// O O O    O O O
//      \        \
//       x        y
//signature required. y = find(A, B, x)

export const getPath = (root, x, memo = []) => {
  if (!x.isEqualNode(root)) {
    let index = [].indexOf.call(x.parentNode.children, x);

    if (index !== -1) {
      memo.push(index);
      return getPath(root, x.parentNode, memo);
    }
  }
  return memo.reverse();
};

const find = (A, B, x) => {
  const path = getPath(A, x);

  return path.reduce((memo, position) => memo.children[position], B);
};

export default find;
