function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched.");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched.");
    }, 2000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data...");

    // const postData = await fetchPostData();
    // console.log(postData);

    // const commentData = await fetchCommentData();
    // console.log(commentData);

    const [postData, commentData] = await Promise.all([fetchPostData(),fetchCommentData()]);
    console.log(postData);
    console.log(commentData);

    setTimeout(() => {
      console.log("fetch complete!");
    }, 2000);
    
  } catch (error) {
    console.error("Error fetching blog data", error);
  }
}

getBlogData();
