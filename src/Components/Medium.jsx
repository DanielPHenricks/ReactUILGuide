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
class Medium extends React.Component {
    render(){
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
                <h1 className="darkText lato" style={{margin:"5px"}}>Medium</h1>
                <p className="" style={{margin:"5px"}}>This section will cover basic data structures and algoritms on the exam, such as sets, maps, stacks, queues, and arrays. It will also cover operator precedence, palindromes, some math, prefix sums, and other techniques.</p>
                <h1 className="darkText lato" style={{margin:"5px"}}>Overview of common set questions/methods</h1>
                <p>Sets (essentially no-duplicate lists) are used often around questions 25-30 as a basic data structure. There's a few methods that are good to know, plus some newer ones being tested this year:</p>
                <CodeComponent code={setMethods}></CodeComponent>
                <p>TreeSets are different, however. Since they are based upon a perfectly-balanced binary search tree, they require O(log(n)) operations to ensure being sorted. This allows for TreeSets to have several different methods:</p>
                <CodeComponent code={tsMethods}></CodeComponent>
                <p>Some examples from previous exams:</p>
                <CodeComponent code={setQ1}></CodeComponent>
                <p>Output: 5<br/>6</p>
                <CodeComponent code={setQ2}></CodeComponent>
                <p>Output: 6</p>
                <p>What replaces 1 in the code to the right so the add operation is average case O(1) given there are N elements already present in the Set? </p>
                <CodeComponent code={setQ3}></CodeComponent>
                <p>Answer: HashSet</p>
                <h1 className="darkText lato" style={{margin:"5px"}}>Overview of sorting methods/time complexities</h1>
                <div style={{backgroundColor: "black", color: "white", textAlign: "left"}}>
                <ReactMarkdown children={sorting} remarkPlugins={[[remarkGfm, {singleTilde: false}]]}/>
                </div>
                <p>You only generally have to know insertion/selection and the difference between them. It's good to know the other three as they have came up in the past before.</p>
                <p>Practice questions: (typically 1/2 on each UIL exam)</p>
                <CodeComponent code={sortingQ1}></CodeComponent>
                <p>Answer: list[--j] = t, insertion sort</p>
                <CodeComponent code={sortingQ2}></CodeComponent>
                <p>Answer: p *= 2, radix sort (notice p is going up by 2^p each time</p>
                <h1 className="darkText lato" style={{margin:"5px"}}>Overview of maps</h1>
                <p>HashMaps/TreeMaps are useful for the programming part when you need key/value pairs. Since they aren't often tested on the multiple choice part, I'll just leave the common methods here and some programming practice at the end of the section.</p>
                <CodeComponent code={maps}></CodeComponent>
                <h1 className="darkText lato" style={{margin:"5px"}}>Overview of stacks/queues</h1>
                <p>There always are stacks/queues questions in the final 10 multiple choice questions. Stacks - LIFO, Queues - FIFO. Java queues are interfaces, meaning you cannot instantiate them. Use a LinkedList to do that.</p>
                <p>Practice questions over stacks/queues:</p>
                <CodeComponent code={sqOne}></CodeComponent>
                <p>Output: BAA, time complexity is O(N) for remove, and it's a queue.</p>
                <CodeComponent code={sqTwo}></CodeComponent>
                <p>Answer: Heap Sort</p>
                <h1 className="darkText lato" style={{margin:"5px"}}>Operator precedence</h1>
                <p>The most annoying part of the UIL test and the easiest questions to miss: operator precedence. Learn the chart!</p>
                <div style={{backgroundColor: "black", color: "white", textAlign: "left"}}>
                <ReactMarkdown children={precedence} remarkPlugins={[[remarkGfm, {singleTilde: false}]]}/>
                </div> 
                <h1 className="darkText lato" style={{margin:"5px"}}>Common algorithms/formulas you NEED to know</h1>
                <h1 className="darkText lato" style={{margin:"5px"}}>Palindromes</h1>
                <p>Palindromes are words that are the same both forward and backward. </p>
                <ReactMarkdown children={`Formally, that is for all 1 $\\le i \\le N, S_i = S_{N+1-i}$, with $N$ being the length of the string.`} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}/>
                <p>How to find a palindrome: </p>
                <CodeComponent code={palindrome}></CodeComponent>
                <h1 className="darkText lato" style={{margin:"5px"}}>Some formulas to learn: </h1>
                <ReactMarkdown children={
`Sum of first $N$ numbers: $\\frac{N(N+1)}{2}$.\n
Sum of first $N$ odd numbers: $N^2$\n
Sum of first $N$ even numbers: $N(N+1)$\n
Number of permutations of an array of length $N$: $N!$
`} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}/>
                <h1 className="darkText lato" style={{margin:"5px"}}>Prefix Sums</h1>
                <ReactMarkdown children={pfsums}remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}/>
                <p>How to code this (slightly confusing) idea:</p>
                <CodeComponent code={pfsumsCode}/>
                <h1 className="darkText lato" style={{margin:"5px"}}>Practice Questions.</h1>
                <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Question Name/Source</th>
                    <th>Link to Question</th>
                    <th>Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  <Link name="Stacks/Queues" url="https://leetcode.com/problems/valid-parentheses/" diff="7/10"> </Link>
                  <Link name="Increasing Array" url="https://cses.fi/problemset/task/1094" diff="5/10"/>
                  <Link name="Kadane's Algo/Arrays/Sums" url="https://cses.fi/problemset/task/1643" diff="6/10"></Link>
                  <Link name="Sets" url="https://cses.fi/problemset/task/1621" diff="5/10"></Link>
                  <Link name="Prefix Sums" url="https://cses.fi/problemset/task/1660" diff="6/10"></Link>
                  <Link name="More sums" url="https://cses.fi/problemset/task/2428" diff="2/10"></Link>
                  <Link name="Palindromes" url="https://leetcode.com/problems/longest-palindromic-substring/" diff="8/10"></Link>
                  <Link name="Prefix Sums" url="https://www.codechef.com/START22C/problems/INTSEQ" diff="6/10"></Link>
                  <Link name="Palindromes" url="https://leetcode.com/problems/palindrome-number/" diff="5/10"></Link>
                  <Link name="UIL A #9" url="https://www.hackerrank.com/uil-practice-questions" diff="5/10"></Link>
                  <Link name="Challenge problem" url="https://codeforces.com/contest/1621/problem/B" diff="9/10"> </Link>
                </tbody>
              </Table>
            </div>
            </div>  
         )
    }
}
const setMethods = 
`add() //returns false if element already in set
addAll() //adds all
remove() //removes the OBJECT
containsAll() /*returns if parameter set is subset
(all elements in parameter set are in other set)
if a = {2, 3, 4} and b = {3, 4}, a.containsAll(b) == true*/
isEmpty() //is empty ? true : false`
const tsMethods = 
`first() //returns first element/null if empty
last() //returns last element/null if empty
ceiling(E e) //returns the first element in this set greater than or equal to the given element, or null.
higher(E e) //returns the first element in this set greater than the given element, or null.
floor(E e) //greatest element less than or equal to this element
lower(E e) //greatest element less than this element`
const setQ1 =
`//from 2022 UIL A 
TreeSet<Integer> set;
set = new TreeSet<Integer>();
set.add(6);
set.add(9);
set.add(5);
set.add(0);
set.add(2);
set.add(4);
//<1>
out.println(set.floor(5));
//<2>
out.print(set.higher(5));`
const setQ2 = `Set<Character> s1, s2;
s1 = new TreeSet<Character>();
s2 = new HashSet<Character>();
String n1 = "ORCAARRCAAC";
String n2 = "RRECEETETRE";
for(int i = 0; i < n1.length(); i++) {
s1.add(n2.charAt(i));
s2.add(n1.charAt(i));
}
s1.addAll(s2);
System.out.print(s1.size());`
const setQ3 = `String ds = "AABbAaAAbCAaaBBbC";
Set<Character> set;
set = new <*1>();
for(int i = 0; i < ds.length(); i++)
set.add( ds.charAt(i) ); // A
System.out.print(set.size());`
const sorting = 
`## Selection Sort
- Selection sort finds the minimum element in the unsorted part of the array and swaps it with the first element in the unsorted part of the array.
- The sorted part of the array grows from left to right with every iteration.
- After *i* iterations, the first *i* elements of the array are sorted.
- Sorts in-place..
- **Best Case:** O(n^2)
- **Average Case:** O(n^2)
- **Worst Case:** O(n^2)
## Insertion Sort
- In every iteration, insertion sort takes the first element in the unsorted part of the array, finds the location it belongs to within the sorted part of the array and inserts it there.
- The sorted part of the array grows from left to right with every iteration.
- After *i* iterations, the first *i* elements of the array are sorted.
- **Best Case:** O(n)
- **Average Case:** O(n^2)
- **Worst Case:** O(n^2)
## Merge Sort
- Uses the *divide & conquer* approach.
- Merge sort divides the original array into smaller arrays recursively until the resulting subarrays have one element each.
- Then, it starts merging the divided subarrays by comparing each element and moving the smaller one to the left of the merged array.
- This is done recursively till all the subarrays are merged into one sorted array.
- **Best Case:** O(n log(n))
- **Average Case:** O(n log(n))
- **Worst Case:** O(n log(n))
## Heap Sort
- For UIL, typically quizzed using a priority queue (they use a binary heap)
- O(n log(n)) time complexity.
## Radix Sort
- Radix sort is a sorting algorithm for integers (and some other data types) that groups the numbers by each digit from left to right (most significant digit radix sort) or right to left (least significant digit radix sort) on every pass.
- This process is repeated for each subsequent digit until the whole array is sorted.
` 
const sortingQ1 = `//What code should replace <*1>, and what sorting algorithm will it be?
public void sort(int[] list) {
int t, j;
    for(int i = 1; i < list.length; i++) {
    t = list[i];
    j = i;
        while((j > 0) && (t < list[j - 1])) {
        list[j] = list[j - 1];
        <*1>;
        }
    }
}`
const sortingQ2 =`//What code should replace <*1>, and what sorting algorithm will it be?
// pre: all elements in vals >= 0
public void sort(int[] vals) {
int[] w = new int[vals.length];
int[] h = new int[vals.length];
int p = 1;
for(int i = 0; i < 31; i++) {
    int w_i = 0, h_i = 0;
    for(int j = 0; j < vals.length; j++) {
        int d = vals[j] & p;
        if(d == 0) w[w_i++] = vals[j];
        else h[h_i++] = vals[j];
    }
    int i_o = 0;
    for(int j = 0; j < w_i; j++) vals[i_o++] = w[j];
    for(int j = 0; j < h_i; j++) vals[i_o++] = h[j];
    <*1>;
    }
}`
const maps = 
`containsKey() // true if present
containsValue() //same concept
entrySet() // returns a set (good for iterating through)
getOrDefault(key, default) // returns the value if key exists else returns default (good for exception handling)
put() //add
remove() // removes object with key`
const sqOne=`//What does this output, what is the remove time complexity, and what data structure does it use?
public class Structure<E> {
    private ArrayList<E> con;
    public Structure() {
        con = new ArrayList<E>();
    }
    public boolean isEmpty() {
        return con.isEmpty();
    }
    public void add(E obj) {
        con.add(obj);
    }
    public E peek() {
        return con.get(0);
    }
    public E remove() {
        return con.remove(0);
    }
}
    // client code
    Structure<Character> stEx;
    stEx = new Structure<Character>();
    String someData = "ABACBAAB";
    int start = someData.length() - 1;
    for(int i = start; i >= 0; i--) stEx.add(someData.charAt(i));
    String out = "";
    out += stEx.remove();
    out += stEx.remove();
    out += stEx.remove();
    System.out.print(out);`
const sqTwo = 
`//What sorting algorithm is this?
public void sort(int[] ints){
    PriorityQueue<Integer> que;
    que = new PriorityQueue<>();
    for(int i: ints) que.add(i);
    int x = 0;
    while(!que.isEmpty())
    ints[x++] = que.poll();
}`
const palindrome = 
`public static void main(String[] args) {
    String str = sc.next();
    boolean flag = false;
    for (int i = 0; i < str.length() / 2; i++) {
        if (str.charAt(i) != str.charAt(str.length() - i - 1)) {
            flag = true;
            break;
        }
    }
    System.out.println(str + " " + (!flag ? "is " : "is not ") + "a palindrome.");
}`
const precedence = 
` Highest up means evaluated first
  - expr++/expr--
  - ++expr/--expr/~
  - */division/%
  - +/-
  - << >>
  - == !=
  - &
  - ^ (xor)
  - |
  - &&
  - ||
  - ? : (ternary)
  - = += -= *= and so on...
`
const pfsums = 
`Let's say we have a one-indexed integer array $arr$ of size $N$and we 
want to compute the value of

arr[a]+arr[a+1]+⋯+arr[b]

for some different pairs of numbers/ranges. Some UIL problems may have strict time constrains, so making code
run in O(n) instead of O($n^2$) would be beneficial. You could use a prefix sum array, or formally, 

prefix$[k] = \\sum_{i=1}^k arr[i]$.

Uses for this: The sum of numbers in array between element 2 and 4 (1-indexed) would be 

prefix[4] - prefix[2] (O(1) instead of O(n))


Other uses as shown in example problems at end of doc.`
const pfsumsCode = 
`public static long[] psum(long[] a){
    long[] psums = new long[N+1];

    for(int i = 0; i<N; i++){
        psums[i+1] = psums[i] + a[i];
    }

    return psums;
}`
export default Medium;