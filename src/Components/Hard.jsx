import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CodeComponent  from './CodeComponent';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from './Link'
import {Row, Col, Button, Navbar, Container, Nav, NavDropdown, Table} from 'react-bootstrap'
import logo from './logo.png'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' 
import graph from './graph.PNG'
import graph2 from './graph2.PNG'
import gates from './gates.png'
import gates2 from './gates2.PNG'
import tree from './tree.png'
import chart from './prefix.PNG'
class Hard extends React.Component {
    render() {
        return(
            <div>
            <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="./">
                        <img
                        alt=""
                        src={logo}
                        width="45"
                        height="45"
                        className="d-inline-block"
                        />{' '}
                    UIL Guide
                    </Navbar.Brand>
                    </Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="./">Home</Nav.Link>
                        <Nav.Link href="./Easy">Easy</Nav.Link>
                        <Nav.Link href="./Medium">Medium</Nav.Link>
                        <Nav.Link href="./Hard">Hard</Nav.Link>
                        <Nav.Link href="https://usaco.guide">Other resources</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            <div className="main" style={{width:"80vw", margin: "0 auto", color: "white"}}>
                <h1 className="lato darkText" style={{margin:"5px"}}>Hard</h1>
                <p>This is the smallest tested section on the exam. These topics usually show up on questions 31-40. This section will mainly deal with graphs/trees.</p>
                <h1 className="lato darkText" style={{margin:"5px"}}>Graphs</h1>
                <p>I'll first include a couple of definitions regarding graphs and then will include some of the algorithms needed.</p>
                <div style={{backgroundColor: "black", color: "white", textAlign: "left"}}>
                <ReactMarkdown children={definitions}></ReactMarkdown>
                </div>
                <h1 className="lato darkText" style={{margin:"5px"}}>Adjacency Matricies</h1>
                <p>I'll be simplifying some of the linear algebra needed for this section. This is a brief overview that's sufficient for UIL purposes. Here's an example of an adjacency matrix:</p>
                <CodeComponent code={adjacencyMatrix}></CodeComponent>
                <p>The first row represents node 1 of the graph. A edge exists between the nodes if <br/><b>adj[i][j] == 1 </b><br/> (for example, since the first node is adjacent to nodes 2 and 3, there is an edge betweeen them.) Try drawing out this graph.</p>
                <p>Adjacency matricies are often used in search questions, such as depth-first or breadth-first searches.</p>
                <p>Example questions from the UIL exam:</p>
                <CodeComponent code={'//UIL 2022 A \nUsing the adjacency matix from above: \nA bridge is a graph edge whose removal would cause a graph to become disconnected. \nAbove is the adjacency matrix of graph G where adj[I][J] = adj[J][I] = 1 \nIf a bidirectional edge exists between vertices I and J. How many bridges exist in G?'}></CodeComponent>
                <img src={graph} alt="graph"></img>
                <p>Answer: 2</p>
                <CodeComponent code={`Given the undirected, weighted graph above, what is
the cost of the lowest cost path from vertex A to vertex E?`}></CodeComponent>
                <p>Answer: 6</p>
                <img src={graph2} alt="graph2"></img>
                <p>Answer: undirected unweighted (no arrows, no weights)</p>
                <p>Graphs are simple once you memorize the basic definitions.</p>
                <h1 className="lato darkText" style={{margin:"5px"}}>Random topics that somehow relate to computer science</h1>
                <p>There always is one or two questions about non-programming topics on the exam. Common ones will be covered here:</p>
                <h1 className="lato darkText" style={{margin:"5px"}}>Circuit logic gates</h1>
                <p>Simply memorize this chart and your score will go up:</p>
                <img src={gates} alt="gates" style={{maxWidth:"60vw"}}></img>
                <p>Sample question from 2022 UIL A: </p>
                <img src={gates2} alt="gates2"></img>
                <CodeComponent code={`//How many possible ways are there for the output to be false? Note: triangle = not`}></CodeComponent>
                <p>Answer: 3</p>
                <h1 className="lato darkText" style={{margin:"5px"}}>Binary Search Trees</h1>
                <p>Binary search trees are the underlying data structure for TreeSets and TreeMaps.</p>
                <ReactMarkdown children={`They are trees, which are graphs that contain $N$ nodes with $N-1$ edges.`}remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}></ReactMarkdown>
                <p>How to traverse a tree:</p>
                <ReactMarkdown style={{textAlign: "left"}}children={traversals}></ReactMarkdown>
                <p>Examples: (I can't find specific ones from UIL but these are similar)</p>
                <img src={tree} alt="tree you can't see"  style={{maxWidth:"60vw"}}></img>
                <p>What is an inorder, postorder, and preorder traversal of the tree?</p>
                <CodeComponent code={travSol}></CodeComponent>
                <h1 className="lato darkText" style={{margin:"5px"}}>Two's Complement and Math Notation</h1>
                <p>These are my least favorite topics on the exam. Here's a brief overview of them:</p>
                <p>The easy one: two's complement. Simply flip all of the bits and then add one.</p>
                <CodeComponent code={`//Write the signed 8-bit binary two's complement representation of the lowest number that is possible to be represented in this form.`}></CodeComponent>
                <p>Solution: 10000000. <br/>Explanation from UIL: The last bit of a 2’s complement number can be viewed as a negative 2^n. Hence the smallest value that can be made is only the last bit and no positive bits to increase it. Hence, 10000000.</p>
                <p>The final topic that is tested on the written exam: prefix/postfix notation. Prefix and postfix notation are ways of writing math expressions. To convert to prefix/postfix notation, look at this chart:</p>
                <img src={chart}alt="chart"style={{maxWidth:"60vw"}} />
                <p>I'll add some more questions when I can find some from previous exams. These are very uncommon topics but they do show up.</p>
                <h1 className="lato darkText" style={{margin:"5px"}}>Dynamic Programming (DP)</h1>
                <p>The final topic: dynamic programming, which is basically storing computed values in an array to be used again. This topic is used in the programming part of the exam. I'll run through an example question:</p>
                <ReactMarkdown children={`Consider a money system consisting of $n$ coins. Each coin has a positive integer value. Your task is to calculate the number of distinct ways you can produce a money sum $x$ using the available coins. For example, if the coins are $ \\{2,3,5\\}$ and the desired sum is 9, there are 8 ways.`}remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}></ReactMarkdown>
                <p>This question actually showed up in a UIL exam about 8-10 years ago. It's possible to solve this without knowing dynamic programming, but knowing it makes the solution much more optimized:</p>
                <CodeComponent code={dpSol}></CodeComponent>
                <p>Some coding practice (I'll try to add my solutions soon):</p>
                <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Question Name/Source</th>
                    <th>Link to Question</th>
                    <th>Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  <Link name="Previously discussed problem - DP" url="https://cses.fi/problemset/task/1635/" diff="9/10"> </Link>
                  <Link name="Logic problem" url="https://cses.fi/problemset/task/2162" diff="7/10"/>
                  <Link name="Harder prefix sums" url="https://cses.fi/problemset/task/1619" diff="7/10"></Link>
                  <Link name="More arrays" url="https://cses.fi/problemset/task/2183" diff="7/10"></Link>
                  <Link name="Hard - graphs/adjacency matricies" url="http://www.usaco.org/index.php?page=viewproblem2&cpid=788" diff="10/10"></Link>
                  <Link name="Slightly easier - prefix sums/other techniques/sorting" url="http://www.usaco.org/index.php?page=viewproblem2&cpid=784" diff="8/10"></Link>
                  <Link name="Strings/Logic" url="http://www.usaco.org/index.php?page=viewproblem2&cpid=1155" diff="8/10"></Link>
                  <Link name="DP/Logic Codeforces" url="https://codeforces.com/problemset/problem/327/A" diff="8/10"></Link>
                  <Link name="Greedy/Sorting/DP" url="https://codeforces.com/problemset/problem/1343/C" diff="8/10"></Link>
                  <Link name="Bitwise Challenge" url="https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" diff="9/10"></Link>
                  <Link name="Challenge problem/DP" url="http://www.usaco.org/index.php?page=viewproblem2&cpid=694" diff="10/10"> </Link>
                </tbody>
              </Table>
            </div>
            </div>
        )
    }
}
const definitions = 
`## Graphs Overview
- Graphs are made up of nodes (circle shapes) and edges (lines).
- Edges connect pieces of the graph. A connected component is all of the pieces that are reachable through some path.
- Length of path = number of edges on it
- A path is a cycle if it starts and ends at the same node.
- A **graph** is connected if you can reach any node from any other node.
- A weighted graph assigns weights, or values, to each edge. For example, a model estimating costs between cities might use this.
- The degree of a node = number of edges leaving it.
- A directed graph has arrows (direction)`
const adjacencyMatrix = 
`[[0, 1, 1, 0, 0]
[1, 0, 1, 0, 1]
[1, 1, 0, 0, 1]
[0, 0, 0, 0, 1]
[0, 0, 1, 1, 0]]`
const traversals = 
`- Preorder: Start at top (root) and then traverse both of its subtrees. Traverse the node's left subtree first and then traverse the node's right subtree.
- Inorder: reading left to right
- Postorder: go in levels: start with the left subtree and go from the leaves(lowest level) up to the root. Read each level inorder.`
const travSol = 
`Inorder: 1 3 4 5 7 9
Postorder: 1 4 3 9 7 5
Preorder: 5 3 1 4 7 9`
const dpSol = 
`public static void main(String[] args) {
    int mod = (int) (1E9 + 7);
    int n = sc.nextInt();
    int target = sc.nextInt();
    ArrayList<Integer> ints = new ArrayList<>();
    for (int i = 0; i < n; i++) ints.add(sc.nextInt()); //getting input
    int[] dp = new int[target + 1]; //length 10 in this example
    dp[0] = 1; //initial condition (not giving any coins)
    for (int i = 1; i <= target; i++) {
        for (int j = 0; j < n; j++) {
            if (i - ints.get(j) >= 0) { // this is a valid way of giving change
                dp[i] += dp[i - ints.get(j)] %= mod //avoid overflow errors;
            }
        }
    }
    System.out.println(dp[target]); //the amount of ways to get change for [target] amount
}`
export default Hard;