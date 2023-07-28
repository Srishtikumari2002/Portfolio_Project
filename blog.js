// Sample data for blogs (replace this with your actual data)
const blogsData = [
    {
        imageUrl: "images/blogs/stateful.webp",
        title: "Differences Between Stateful vs Stateless",
        link: "https://codedamn.com/news/computer-networking/differences-between-stateful-vs-stateless",
    },
    {
        imageUrl: "images/blogs/js.webp",
        title: "How to read CSV with JavaScript?",
        link: "https://codedamn.com/news/javascript/how-to-read-csv-with-javascript",
    },
    {
        imageUrl: "images/blogs/cyber_imp.webp",
        title: "Cybersecurity: Why is it so Important",
        link: "https://codedamn.com/news/cyber-security/importance-of-cybersecurity",
    },
    {
        imageUrl: "images/blogs/python.webp",
        title: "How to use the Replace function in Python",
        link: "https://codedamn.com/news/python/how-to-use-the-replace-function-in-python",
    },
    {
        imageUrl: "images/blogs/opencv.webp",
        title: "Beginner’s guide to OpenCV in Python",
        link: "https://codedamn.com/news/python/beginners-guide-to-opencv-in-python",
    },
    {
        imageUrl: "images/blogs/graph.webp",
        title: "Introduction to Adjacency List for Graph",
        link: "https://codedamn.com/news/programming/introduction-to-adjacency-list-for-graph",
    },
    {
        imageUrl: "images/blogs/sql.webp",
        title: "Is SQL a programming language?",
        link: "https://codedamn.com/news/databases/is-sql-a-programming-language",
    },
    {
        imageUrl: "images/blogs/compiler.webp",
        title: "Differences Between Compiler and Assembler",
        link: "https://codedamn.com/news/programming/differences-between-compiler-and-assembler",
    },
    {
        imageUrl: "images/blogs/polymorphism.webp",
        title: "Polymorphism in Python with an Example",
        link: "https://codedamn.com/news/python/polymorphism-in-python-with-an-example",
    },
    {
        imageUrl: "images/blogs/ssl.webp",
        title: "Difference Between SSL and TLS",
        link: "https://codedamn.com/news/computer-networking/difference-between-ssl-and-tls",
    },
    {
        imageUrl: "images/blogs/module.webp",
        title: "List of Python Math Modules & Functions",
        link: "https://codedamn.com/news/python/list-of-python-math-modules-functions",
    },
    {
        imageUrl: "images/blogs/scipy.webp",
        title: "Python SciPy Constants – Multiple Examples",
        link: "https://codedamn.com/news/python/python-scipy-constants-multiple-examples",
    },
    {
        imageUrl: "images/blogs/what_is_js.webp",
        title: "What is JavaScript (JS)? Pros and cons compared",
        link: "https://codedamn.com/news/javascript/pros-cons-of-javascript",
    },
    {
        imageUrl: "images/blogs/stress_testing.webp",
        title: "Introduction to Stress Testing with an Example",
        link: "https://codedamn.com/news/testing/introduction-to-stress-testing-with-an-example",
    },
    
    {
        imageUrl: "images/blogs/flask.webp",
        title: "How to create flashing/blinking text using HTML?",
        link: "https://codedamn.com/news/html/how-to-create-flashing-blinking-text-using-html",
    },
    {
        imageUrl: "images/blogs/operator.webp",
        title: "How many types of operators are there in python?",
        link: "https://codedamn.com/news/python/how-many-types-of-operators-are-there-in-python",
    },
    
    {
        imageUrl: "images/blogs/regression.webp",
        title: "Regression Testing – Everything You Need To Know",
        link: "https://codedamn.com/news/testing/regression-testing-everything-you-need-to-know",
    },   
    
    {
        imageUrl: "images/blogs/truncate.webp",
        title: "Difference between Truncate vs Delete Statement",
        link: "https://codedamn.com/news/databases/difference-between-truncate-vs-delete-statement",
    },
    {
        imageUrl: "images/blogs/os.webp",
        title: "Understanding Time Sharing Operating Systems",
        link: "https://codedamn.com/news/linux/understanding-time-sharing-operating-systems",
    },
    {
        imageUrl: "images/blogs/course.webp",
        title: "Best Podia alternative for building online courses",
        link: "https://codedamn.com/news/product/best-podia-alternative-for-building-online-courses",
    },
    {
        imageUrl: "images/blogs/jsFunction.webp",
        title: "7 Techniques for JavaScript Function Declarations",
        link: "https://codedamn.com/news/javascript/7-techniques-for-javascript-function-declarations",
    },
    {
        imageUrl: "images/blogs/web.webp",
        title: "Complete guide to web development with python",
        link: "https://codedamn.com/news/python/web-development-with-python",
    },
    {
        imageUrl: "images/blogs/cpp.webp",
        title: "How should C/C++ be coded in competitive programming?",
        link: "https://codedamn.com/news/c/how-should-c-be-coded-in-competitive-programming",
    },
    {
        imageUrl: "images/blogs/python3.webp",
        title: "A comparison of Python 2.x and Python 3.x with examples",
        link: "https://codedamn.com/news/python/a-comparison-of-python-2-x-and-python-3-x-with-examples",
    },
    
    {
        imageUrl: "images/blogs/learn.webp",
        title: "Best LearnDash alternative for building online courses",
        link: "https://codedamn.com/news/product/best-learndash-alternative-for-building-online-courses",
    },
    
    {
        imageUrl: "images/blogs/java.webp",
        title: "How do you convert java.util.Date to java.sql.Date in Java?",
        link: "https://codedamn.com/news/java/how-do-you-convert-java-util-date-to-java-sql-date-in-java",
    },
    {
        imageUrl: "images/blogs/sep.webp",
        title: "How do Python end and sep parameters different in print ()?",
        link: "https://codedamn.com/news/python/how-do-python-end-and-sep-parameters-different-in-print",
    },
    {
        imageUrl: "images/blogs/DML.webp",
        title: "How do create and use SQL Server DML triggers for data auditing?",
        link: "https://codedamn.com/news/databases/how-do-create-and-use-sql-server-dml-triggers-for-data-auditing",
    },
    {
        imageUrl: "images/blogs/statement.webp",
        title: "How to write a Python statement, indentation, and comment",
        link: "https://codedamn.com/news/python/how-to-write-a-python-statement-indentation-and-comment",
    },
    
    {
        imageUrl: "images/blogs/decimal.webp",
        title: "JavaScript round a number to 2 decimal places (with examples)",
        link: "https://codedamn.com/news/javascript/javascript-round-a-number-to-2-decimal-places-with-examples",
    },
    {
        imageUrl: "images/blogs/docker.webp",
        title: "What is the difference between Docker and Virtualization?",
        link: "https://codedamn.com/news/docker/what-is-the-difference-between-docker-and-virtualization",
    },
    
    {
        imageUrl: "images/blogs/square.webp",
        title: "How to square a number in Python? All possible ways",
        link: "https://codedamn.com/news/python/how-to-square-a-number-in-python-all-possible-ways",
    }, 
    {
        imageUrl: "images/blogs/palin.webp",
        title: "Introduction to Palindrome? All possible ways in python.",
        link: "https://codedamn.com/news/python/introduction-to-palindrome-all-possible-ways-in-python",
    },
    {
        imageUrl: "images/blogs/regular.webp",
        title: "Regularization in Machine Learning: A Complete Guide",
        link: "https://codedamn.com/news/machine-learning/regularization-in-machine-learning-a-complete-guide",
    },       
    {
        imageUrl: "images/blogs/ml.webp",
        title: "Top 10 Machine Learning Algorithms You Need To Know in 2023",
        link: "https://codedamn.com/news/machine-learning/top-10-machine-learning-algorithms-you-need-to-know-in-2023",
    },
    {
        imageUrl: "images/blogs/naive.webp",
        title: "Naïve Bayes Algorithm in Machine Learning Explained with an example",
        link: "https://codedamn.com/news/machine-learning/naive-bayes-algorithm-in-machine-learning-explained-with-an-example",
    },
    {
        imageUrl: "images/blogs/AWS.webp",
        title: "AWS vs Azure vs Google Cloud: Which One Is Best?",
        link: "https://codedamn.com/news/aws/aws-vs-azure-vs-google-cloud-which-one-is-best",
    },
    {
        imageUrl: "images/blogs/breach.webp",
        title: "Data Breach: What Is It, & How Can It Be Prevented?",
        link: "https://codedamn.com/news/cyber-security/data-breach-what-is-it-how-can-it-be-prevented",
    },
];


// Function to create blog boxes for a given range of blogs
function createBlogBoxes(startIndex, endIndex) {
    const blogContainer = document.getElementById("blogContainer");

    for (let i = startIndex; i < endIndex && i < blogsData.length; i++) {
        const blog = blogsData[i];
        const blogBox = document.createElement("div");
        blogBox.classList.add("blog");

        const blogLink = document.createElement("a");
        blogLink.href = blog.link;

        const blogImage = document.createElement("img");
        blogImage.src = blog.imageUrl;
        blogImage.alt = blog.title;

        const blogTitle = document.createElement("h3");
        blogTitle.textContent = blog.title;

        blogLink.appendChild(blogImage);
        blogLink.appendChild(blogTitle);
        blogBox.appendChild(blogLink);

        blogContainer.appendChild(blogBox);
    }
}

// Function to handle the "View More" button click event
function handleViewMore() {
    const blogsToShow = 6;
    const blogContainer = document.getElementById("blogContainer");
    const loadMoreButton = document.getElementById("loadMoreButton");

    let startIndex = blogContainer.children.length; // Get the starting index for the next set of blogs
    let endIndex = startIndex + blogsToShow; // Calculate the ending index for the next set

    createBlogBoxes(startIndex, endIndex);

    // Hide the "View More" button if all blogs are displayed
    if (endIndex >= blogsData.length) {
        loadMoreButton.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const blogsToShow = 6; // Number of blogs to display initially
    createBlogBoxes(0, blogsToShow);

    const loadMoreButton = document.getElementById("loadMoreButton");
    loadMoreButton.addEventListener("click", handleViewMore);
});
