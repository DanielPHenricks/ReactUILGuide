import React from 'react';
import {Row, Col, Button, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import CodeComponent  from './CodeComponent';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from './Link'
import { Table } from 'react-bootstrap'
//all md at end of document
class Easy extends React.Component {
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
                <h1 className="darkText lato" style={{margin:"5px"}}>Easy</h1>
                <p className="darkText" style={{margin:"5px"}}>This section will cover some of the easier questions. I'm not going to add much here.</p>
                <h1 className="darkText lato" style={{margin:"5px"}}>Overview of UIL Rules</h1>
                <p>The written contest is 45 minutes long and the programming portion is usually 3 hours long, but can be finished much quicker. 
                The majority of the first 20-25 questions are pretty easy to solve as long as you know basic computer science topics, except for some
                that deal with regular expressions and certain bitwise operators (rare). Those 25ish questions are what I'll be covering in Easy.
                </p>
                <h1 className="darkText lato" style={{margin:"5px"}}>Review: Iteration/Loops</h1>
                <p>There always seems to be at least 1 question asking about for loops/while loops. Example: (2011 UILA)</p>
                <CodeComponent code={forLoopCode1}/>
                <p>Output: 5</p>
                <p>One more example: What value of val would make c be equal to 4? (2011 UILB Q17)</p>
                <CodeComponent code={forLoopCode2}/>
                <h1 className="darkText lato" style={{margin:"5px"}}>Review: Scanners</h1>
                <p>Scanners are a common topic and ESSENTIAL for the programming portion of the exam. 1 to 2 of the 12 questions on the programming part
                    involve using a scanner and reading in input. If you are reading from a file, you need to add an exception or try/catch block to your
                    code in case the file cannot be found. The multiple choice questions dealing with scanners are simple as long as you know the basic 
                    methods:
                </p>
                <CodeComponent code={scannerMethods}/>
                <p>Here's the example file I'll be using for some examples:</p>
                <CodeComponent code={exampleFile}/>
                <p>First example: reading all the text in the string. You could also put the text in a file if you want.</p>
                <CodeComponent code={scannerEx1}/>
                <p>Output:</p>
                <CodeComponent code={outscannerEx1}/>
                <p>Second example: Using regex. Before going to that example, I'm going to introduce some of the common regex
                patterns tested on the exam: (used in String contains/matches methods)
                </p>
                <h1 className="darkText lato" style={{margin:"5px"}}>Regex/Escape Character Basics</h1>
                <p>I'm going to just use a guide I found that has been helpful and then add the ones tested on the UIL exam. Regex is great for the programming portion.</p>
                <div style={{backgroundColor: "black", color: "white", textAlign: "left"}}>
                <ReactMarkdown children={markdown} remarkPlugins={[[remarkGfm, {singleTilde: false }]]}/>
                </div>
                <p>Back to example 2 of the scanner section:</p>
                <CodeComponent code={scannerEx2}/>
                <p>Output:</p>
                <CodeComponent code={scannerOutEx2}/>
                <p>Another common regex question is the matches() method. The matches() method is awful and only works if the whole
                    string matches the regex. It's best to see an example of how this works:
                </p>
                <CodeComponent code={matchesMethod}/>
                <p>Output:</p>
                <CodeComponent code={matchesMethodOut}/>
                <p>Without the + sign, it only works for a string of 1 length.</p>
                <p>Some previous UIL questions:</p>
                <CodeComponent code={`System.out.print("10\\\\5\\\\2");`}/>
                <p>Output: 10\5\2</p>
                <CodeComponent code={`System.out.print("C");
System.out.print("C++");
System.out.print("\\nPHP");`}/>
                <p>Output: CC++<br/>PHP</p>
                <h1 className="darkText lato" style={{margin:"5px"}}>printf()</h1>
                <p>Every UIL exam has 1 printf() question in the first 15 questions. It's really easy if you know the rules:</p>
                <h1 className="darkText lato">% [flags] [width] [.precision] conversion-character</h1>
                <div style={{backgroundColor: "black", color: "white", textAlign: "left"}}>
                <ReactMarkdown children={mdPrintF} remarkPlugins={[[remarkGfm, {singleTilde: false}]]}/>
                </div>
                <p>Examples from previous exams: </p>
                <CodeComponent code={`System.out.printf("%+4d", 16384);`}/>
                Output: +16384
                <CodeComponent code={`out.printf("%05.2f", 2.345);`}/>
                Output: 02.35 
                <CodeComponent code={`System.out.printf("%06d", 732);`}/>
                Output: 000732
                <CodeComponent code={`System.out.printf("%,5.7f", 5472.12);`}/>
                Output: 5,472.1200000
                <p>That alone is about 10/15 of the 40 questions on the exam. The rest of the ones in the "easy" section should
                be simple. I'll add some free response questions below this to practice:</p>
                <h1 className="darkText lato" style={{margin:"5px"}}>Programming Section Practice</h1>
                <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Question Name/Source</th>
                    <th>Link to Question</th>
                    <th>Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  <Link name="printf/Basic Algorithms UIL (sign up for the contest)" url="https://www.hackerrank.com/contests/uil-practice-questions/challenges" diff="3/10"/>
                  <Link name="Iteration/Formatting UIL (sign up for the contest)" url="https://www.hackerrank.com/contests/uil-practice-questions/challenges" diff="1/10"></Link>
                  <Link name="Regex #1" url="https://www.hackerrank.com/challenges/matching-digits-non-digit-character/problem?isFullScreen=true" diff="2/10"></Link>
                  <Link name="Regex #2" url="https://www.hackerrank.com/challenges/matching-zero-or-more-repetitions/problem?isFullScreen=true" diff="2/10"></Link>
                  <Link name="Regex #3" url="https://www.hackerrank.com/challenges/matching-anything-but-new-line/problem?isFullScreen=true" diff="2/10"></Link>
                  <Link name="Iteration - Weird Algorithm/Collatz CSES" url="https://cses.fi/problemset/task/1068" diff="3/10"></Link>
                  <Link name="Random Topic - Common UIL question!" url="https://cses.fi/problemset/task/1083" diff="3/10"></Link>
                  <Link name="Basic Math/Iteration CodeChef" url="https://www.codechef.com/COOK137C/problems/MASKPOL" diff="4/10"></Link>
                  <Link name="Basic Modular Arithmetic CodeChef" url="https://www.codechef.com/START22C/problems/EQCARDGAME" diff="2/10"></Link>
                  <Link name="Basic Chess Piece puzzle" url="https://codeforces.com/contest/1621/problem/A" diff="3/10"> </Link>
                </tbody>
              </Table>
            </div>
        </div>
        )
    }
}
export default Easy;
const forLoopCode1 =
`int total = 0;
for(int i = 0; i < 20; i++){
    if(i % 4 == 0)total++;
}
System.out.print(total);`
const forLoopCode2 = 
`int val = [?]
int c = 0;
while( val >= 5 ) {
    val /= 2;
    c++;
}
System.out.println(c);`
const scannerMethods = 
`hasNext() /*returns true/false if next (one of these for all primitive
types/BigInteger, such as hasNextInt()) */
next() /*returns next value but does NOT automatically go to next line!
(use nextLine() or my custom scanner class for that)
(one of these for all primitive types/BigInteger, such as nextInt()) */
useDelimeter() // a rarely-quizzed method that uses regex to find matches
//i'll add an example of this below

//My custom scanner class I use for competitive programming that is about 3x faster: (copy if you want to use it)
class CustomScanner extends PrintWriter {
	private BufferedReader r;
	private StringTokenizer st;
	// standard input
	public CustomScanner() { this(System.in,System.out); }
	public CustomScanner(InputStream i, OutputStream o) {
		super(o);
		r = new BufferedReader(new InputStreamReader(i));
	}
	// USACO-style file input
	public CustomScanner(String problemName) throws IOException {
		super(problemName+".out");
		r = new BufferedReader(new FileReader(problemName+".in"));
	}
	// returns null if no more input
	public String next() {
		try {
			while (st == null || !st.hasMoreTokens())
				st = new StringTokenizer(r.readLine());
			return st.nextToken();
		} catch (Exception e) {}
		return null;
	}
	public int nextInt() { return Integer.parseInt(next()); }
	public double nextDouble() { return Double.parseDouble(next()); }
	public long nextLong() { return Long.parseLong(next()); }
}`
const exampleFile = `You got 95/100 points on your exam. Date: 2/3/22`
const scannerEx1 = `Scanner sc = new Scanner("You got 95/100 points on your exam. Date: 2/3/22");
while (sc.hasNext()) System.out.println(sc.next());`
const outscannerEx1 = `You
got
95/100
points
on
your
exam.
Date:
2/3/22
`
const markdown = 
`# Regular Expressions
## Character Classes
- \\s: Whitespace
- \\S: Not whitespace
- \\w: Word
- \\W: Not word
- \\d: Digit
- \\D: Not digit
## Special Characters
- \\n: Newline
- \\r: Carriage return
- \\t: Tab
- \\\\\\\\: escaping a \\
## Grouping (most commonly used)
- [...]: anything inside [] matches
- [\\^...]: anything not inside [] matches
- [0-9]: all digits
- [a-zA-Z]: english alphabet
- [2-5]: 2, 3, 4, 5
## Quantifiers (how many) **these are heavily tested** 
- *: 0 or more
- +: 1 or more
- ?: 0 or 1

Inspired from https://gist.githubusercontent.com/vitorbritto/9ff58ef998100b8f19a0/raw/74d158a613177d479a64d74e4179fff34c970091/regex.md`;
const scannerEx2 = `Scanner sc = new Scanner("You got 95/100 points on your exam. Date: 2/3/22");
Pattern p = Pattern.compile("[2-5]");
sc.useDelimiter(p);
while (sc.hasNext()) System.out.println(sc.next());`
const scannerOutEx2 = `You got 9
/100 points on your exam. Date: 
/
/


`
const matchesMethod = `String[] arr = {"az", "a", "123", "Abz"};
for (String str : arr) {
    System.out.println(str.matches("[a-z]") + " " + str.matches("[a-z]+"));
}`
const matchesMethodOut = `false true
true true
false false
false false`
const mdPrintF = `Flags:
- +: output a plus ( + ) or minus ( - ) sign for a numerical value

- 0: forces numerical values to be zero-padded ( default is blank padding )

- ,: comma grouping separator (for numbers > 1000)

- space character : space will display a minus sign if the number is negative or a space if it is positive

Width:

- Specifies the field width for outputting the argument and represents the **minimum** number of characters to
be written to the output. Include space for expected commas and a decimal point in the determination of
the width for numerical values.

Precision:

- Used to restrict the output depending on the conversion. It specifies the number of digits of precision when
outputting floating-point values or the length of a substring to extract from a String. Numbers are **rounded**
to the specified precision.

Conversion-Characters:
- d : decimal integer
- f : floating-point number [float, double]
- c : character Capital C will uppercase the letter
- s : String Capital S will uppercase all the letters in the string
- %n: newline (like println)`