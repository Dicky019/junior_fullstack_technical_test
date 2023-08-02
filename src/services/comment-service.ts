export function jawaban5(comments: IComment[]): number {
  let totalCount = 0;

  function countCommentsRecursive(comment: IComment): void {
    totalCount++; // Count the main comment
    if (comment.replies) {
      for (const reply of comment.replies) {
        countCommentsRecursive(reply); // Count replies recursively
      }
    }
  }

  for (const comment of comments) {
    countCommentsRecursive(comment);
  }

  return totalCount;
}
