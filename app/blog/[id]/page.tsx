"use client"

import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"

const blogContent: Record<string, any> = {
  "1": {
    title: "Giới thiệu về Java: Ngôn ngữ lập trình hướng đối tượng",
    category: "Java",
    date: "15/12/2024",
    readTime: "5 phút đọc",
    content: `
Java là một trong những ngôn ngữ lập trình phổ biến nhất thế giới, được phát triển bởi Sun Microsystems (nay thuộc Oracle) vào năm 1995. Java được thiết kế với triết lý "Write Once, Run Anywhere" (WORA), cho phép code Java chạy trên bất kỳ nền tảng nào có Java Virtual Machine (JVM).

## Đặc điểm nổi bật của Java

### 1. Hướng đối tượng (Object-Oriented)
Java là ngôn ngữ hoàn toàn hướng đối tượng, mọi thứ trong Java đều là object (trừ các kiểu dữ liệu nguyên thủy). Điều này giúp code dễ bảo trì, tái sử dụng và mở rộng.

### 2. Platform Independent
Nhờ có JVM, Java bytecode có thể chạy trên bất kỳ hệ điều hành nào (Windows, Linux, Mac) mà không cần biên dịch lại.

### 3. Bảo mật cao
Java có nhiều tính năng bảo mật tích hợp như ClassLoader, Bytecode Verifier và Security Manager, giúp ứng dụng an toàn hơn.

## Ứng dụng của Java

- **Enterprise Applications**: Hệ thống ngân hàng, tài chính
- **Android Development**: Phát triển ứng dụng di động
- **Web Applications**: Website và web services
- **Big Data**: Xử lý dữ liệu lớn với Hadoop, Spark

## Ví dụ đơn giản

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java World!");
    }
}
\`\`\`

Java là lựa chọn tuyệt vời cho người mới bắt đầu học lập trình cũng như các developer chuyên nghiệp.
    `,
  },
  "2": {
    title: "Hiểu về OOP trong Java: Class và Object",
    category: "Java",
    date: "16/12/2024",
    readTime: "8 phút đọc",
    content: `
Lập trình hướng đối tượng (OOP) là paradigm lập trình quan trọng trong Java. Hiểu rõ các khái niệm cơ bản về Class và Object sẽ giúp bạn viết code tốt hơn.

## Class là gì?

Class là bản thiết kế (blueprint) để tạo ra các object. Nó định nghĩa các thuộc tính (attributes) và hành vi (methods) mà object sẽ có.

\`\`\`java
public class Student {
    // Thuộc tính
    private String name;
    private int age;
    
    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    public void study() {
        System.out.println(name + " is studying");
    }
}
\`\`\`

## Object là gì?

Object là instance của class - một thực thể cụ thể được tạo ra từ class blueprint.

\`\`\`java
Student student1 = new Student("Nguyen Van A", 20);
student1.study(); // Output: Nguyen Van A is studying
\`\`\`

## 4 Nguyên lý cơ bản của OOP

### 1. Encapsulation (Đóng gói)
Ẩn giấu dữ liệu bên trong class và chỉ cho phép truy cập qua các methods public.

### 2. Inheritance (Kế thừa)
Class con có thể kế thừa thuộc tính và method từ class cha.

### 3. Polymorphism (Đa hình)
Một method có thể có nhiều hình thức khác nhau.

### 4. Abstraction (Trừu tượng)
Ẩn giấu chi tiết implementation và chỉ hiển thị chức năng cần thiết.

OOP giúp code dễ bảo trì, tái sử dụng và mở rộng hơn rất nhiều.
    `,
  },
  "3": {
    title: "Exception Handling trong Java: Try-Catch và Best Practices",
    category: "Java",
    date: "17/12/2024",
    readTime: "6 phút đọc",
    content: `
Exception handling là cơ chế quan trọng trong Java để xử lý các lỗi runtime một cách graceful, tránh crash ứng dụng.

## Try-Catch Block

Cấu trúc cơ bản của exception handling:

\`\`\`java
try {
    // Code có thể gây ra exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // Xử lý exception
    System.out.println("Không thể chia cho 0: " + e.getMessage());
} finally {
    // Code luôn được thực thi
    System.out.println("Clean up resources");
}
\`\`\`

## Các loại Exception

### 1. Checked Exceptions
Compiler bắt buộc phải xử lý (IOException, SQLException)

### 2. Unchecked Exceptions
Runtime exceptions không bắt buộc xử lý (NullPointerException, ArrayIndexOutOfBoundsException)

## Custom Exceptions

Tạo exception riêng cho ứng dụng:

\`\`\`java
public class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public void validateAge(int age) throws InvalidAgeException {
    if (age < 0) {
        throw new InvalidAgeException("Tuổi không hợp lệ");
    }
}
\`\`\`

## Best Practices

1. **Catch specific exceptions** thay vì Exception chung
2. **Không bỏ trống catch block** - ít nhất log error
3. **Sử dụng finally** để clean up resources
4. **Throw exceptions sớm**, catch muộn
5. **Document exceptions** trong JavaDoc

Exception handling đúng cách giúp ứng dụng robust và dễ debug hơn.
    `,
  },
  "4": {
    title: "Java Collections Framework: List, Set, Map",
    category: "Java",
    date: "18/12/2024",
    readTime: "10 phút đọc",
    content: `
Collections Framework là một trong những thư viện quan trọng nhất trong Java, cung cấp các cấu trúc dữ liệu và algorithms để làm việc với tập hợp dữ liệu.

## List Interface

List lưu trữ các phần tử theo thứ tự và cho phép duplicate.

### ArrayList
\`\`\`java
List<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");
list.add("JavaScript");
System.out.println(list.get(0)); // Java
\`\`\`

### LinkedList
Tốt cho insert/delete ở đầu/giữa list.

## Set Interface

Set không cho phép duplicate elements.

### HashSet
\`\`\`java
Set<Integer> numbers = new HashSet<>();
numbers.add(1);
numbers.add(2);
numbers.add(1); // Không được thêm vào
System.out.println(numbers.size()); // 2
\`\`\`

## Map Interface

Map lưu trữ key-value pairs.

### HashMap
\`\`\`java
Map<String, Integer> ages = new HashMap<>();
ages.put("An", 20);
ages.put("Binh", 22);
System.out.println(ages.get("An")); // 20
\`\`\`

## Khi nào dùng gì?

- **ArrayList**: Truy cập random, ít insert/delete
- **LinkedList**: Nhiều insert/delete ở đầu/giữa
- **HashSet**: Kiểm tra tồn tại nhanh, không duplicate
- **HashMap**: Lưu trữ key-value, truy cập nhanh

Hiểu rõ Collections Framework giúp bạn chọn đúng data structure cho từng bài toán.
    `,
  },
  "5": {
    title: "Multithreading trong Java: Lập trình đa luồng",
    category: "Java",
    date: "19/12/2024",
    readTime: "12 phút đọc",
    content: `
Multithreading cho phép thực thi nhiều tasks đồng thời, tối ưu hóa performance của ứng dụng Java.

## Tạo Thread

### Cách 1: Extend Thread class
\`\`\`java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread đang chạy");
    }
}

MyThread thread = new MyThread();
thread.start();
\`\`\`

### Cách 2: Implement Runnable interface
\`\`\`java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable đang chạy");
    }
}

Thread thread = new Thread(new MyRunnable());
thread.start();
\`\`\`

## Thread Lifecycle

1. **New**: Thread được tạo
2. **Runnable**: Sẵn sàng chạy
3. **Running**: Đang thực thi
4. **Blocked/Waiting**: Đang chờ
5. **Terminated**: Kết thúc

## Synchronization

Tránh race condition khi nhiều threads truy cập shared resource:

\`\`\`java
class Counter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
}
\`\`\`

## Thread Pool

Sử dụng ExecutorService để quản lý threads:

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(5);
executor.submit(() -> {
    System.out.println("Task executed");
});
executor.shutdown();
\`\`\`

## Best Practices

1. Tránh deadlock
2. Sử dụng thread-safe collections
3. Prefer ExecutorService over manual Thread creation
4. Sử dụng concurrent utilities (CountDownLatch, Semaphore)

Multithreading phức tạp nhưng mạnh mẽ - cần học và thực hành nhiều.
    `,
  },
  "6": {
    title: "JavaScript ES6+: Var, Let, Const và Arrow Functions",
    category: "JavaScript",
    date: "20/12/2024",
    readTime: "7 phút đọc",
    content: `
ES6 (ES2015) mang đến nhiều tính năng mới giúp JavaScript hiện đại và dễ viết hơn. Hãy cùng tìm hiểu những tính năng quan trọng nhất.

## Let và Const vs Var

### Var (cách cũ)
\`\`\`javascript
var x = 10;
var x = 20; // OK - có thể khai báo lại
\`\`\`

### Let (block-scoped)
\`\`\`javascript
let y = 10;
// let y = 20; // Error - không thể khai báo lại
y = 30; // OK - có thể gán lại
\`\`\`

### Const (constant)
\`\`\`javascript
const z = 10;
// z = 20; // Error - không thể gán lại
\`\`\`

## Arrow Functions

Cú pháp ngắn gọn hơn cho functions:

\`\`\`javascript
// Cách cũ
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Arrow function với nhiều statements
const greet = (name) => {
    const message = \`Hello \${name}\`;
    return message;
};
\`\`\`

## Template Literals

\`\`\`javascript
const name = "An";
const age = 20;
console.log(\`Tên: \${name}, Tuổi: \${age}\`);
\`\`\`

## Destructuring

### Array Destructuring
\`\`\`javascript
const [first, second] = [1, 2, 3];
console.log(first); // 1
\`\`\`

### Object Destructuring
\`\`\`javascript
const person = { name: "An", age: 20 };
const { name, age } = person;
\`\`\`

## Spread Operator

\`\`\`javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
\`\`\`

ES6+ làm JavaScript trở nên powerful và elegant hơn rất nhiều!
    `,
  },
  "7": {
    title: "Asynchronous JavaScript: Promises và Async/Await",
    category: "JavaScript",
    date: "21/12/2024",
    readTime: "9 phút đọc",
    content: `
JavaScript là single-threaded nhưng có thể xử lý async operations hiệu quả nhờ Promises và async/await.

## Callbacks (cách cũ)

\`\`\`javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
\`\`\`

Vấn đề: Callback hell khi có nhiều async operations.

## Promises

Promise là object đại diện cho kết quả của async operation.

\`\`\`javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Success!");
        } else {
            reject("Failed!");
        }
    }, 1000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error));
\`\`\`

## Async/Await

Cú pháp hiện đại hơn để làm việc với Promises:

\`\`\`javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
\`\`\`

## Promise.all()

Chạy nhiều promises song song:

\`\`\`javascript
const promise1 = fetch('/api/users');
const promise2 = fetch('/api/posts');

const [users, posts] = await Promise.all([promise1, promise2]);
\`\`\`

## Best Practices

1. Luôn handle errors với .catch() hoặc try-catch
2. Tránh mixing callbacks với Promises
3. Sử dụng async/await cho code dễ đọc
4. Promise.all() cho parallel requests
5. Promise.race() khi cần kết quả nhanh nhất

Async programming là key skill cho JavaScript developers!
    `,
  },
  "8": {
    title: "DOM Manipulation: Tương tác với HTML bằng JavaScript",
    category: "JavaScript",
    date: "22/12/2024",
    readTime: "8 phút đọc",
    content: `
DOM (Document Object Model) cho phép JavaScript tương tác và thay đổi nội dung, cấu trúc, và style của trang web.

## Selecting Elements

\`\`\`javascript
// By ID
const element = document.getElementById('myId');

// By Class
const elements = document.getElementsByClassName('myClass');

// By CSS Selector
const element = document.querySelector('.myClass');
const elements = document.querySelectorAll('.myClass');
\`\`\`

## Modifying Content

\`\`\`javascript
// Text content
element.textContent = 'New text';

// HTML content
element.innerHTML = '<strong>Bold text</strong>';
\`\`\`

## Modifying Attributes

\`\`\`javascript
// Get attribute
const src = img.getAttribute('src');

// Set attribute
img.setAttribute('src', 'new-image.jpg');

// Direct property access
img.src = 'new-image.jpg';
\`\`\`

## Modifying Styles

\`\`\`javascript
element.style.color = 'red';
element.style.fontSize = '20px';

// Add/remove classes
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlight');
\`\`\`

## Creating and Removing Elements

\`\`\`javascript
// Create
const div = document.createElement('div');
div.textContent = 'New div';
document.body.appendChild(div);

// Remove
element.remove();
\`\`\`

## Event Listeners

\`\`\`javascript
button.addEventListener('click', () => {
    console.log('Button clicked!');
});
\`\`\`

## Best Practices

1. Cache DOM queries
2. Minimize reflows/repaints
3. Use event delegation
4. Batch DOM updates
5. Use DocumentFragment cho nhiều elements

DOM manipulation là foundation của web development!
    `,
  },
  "9": {
    title: "JavaScript Modules: Import/Export và Code Organization",
    category: "JavaScript",
    date: "23/12/2024",
    readTime: "6 phút đọc",
    content: `
ES6 Modules giúp tổ chức code JavaScript thành các files riêng biệt, dễ maintain và reuse.

## Named Exports

\`\`\`javascript
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;
\`\`\`

\`\`\`javascript
// app.js
import { add, subtract, PI } from './math.js';
console.log(add(5, 3)); // 8
\`\`\`

## Default Export

\`\`\`javascript
// calculator.js
export default class Calculator {
    add(a, b) {
        return a + b;
    }
}
\`\`\`

\`\`\`javascript
// app.js
import Calculator from './calculator.js';
const calc = new Calculator();
\`\`\`

## Import Everything

\`\`\`javascript
import * as MathUtils from './math.js';
console.log(MathUtils.add(5, 3));
\`\`\`

## Rename Imports

\`\`\`javascript
import { add as sum } from './math.js';
console.log(sum(5, 3));
\`\`\`

## Best Practices

### 1. File Organization
\`\`\`
src/
  components/
    Button.js
  utils/
    math.js
  services/
    api.js
  index.js
\`\`\`

### 2. One responsibility per module
Mỗi file chỉ nên có một mục đích chính.

### 3. Clear naming
Tên file và exports phải rõ ràng.

### 4. Avoid circular dependencies
A imports B, B imports A → Bad!

### 5. Use barrel exports
\`\`\`javascript
// utils/index.js
export * from './math.js';
export * from './string.js';
\`\`\`

Modules giúp code scalable và maintainable hơn rất nhiều!
    `,
  },
  "10": {
    title: "Event Handling trong JavaScript: Click, Submit, và More",
    category: "JavaScript",
    date: "24/12/2024",
    readTime: "7 phút đọc",
    content: `
Event handling là cách JavaScript tương tác với user actions như click, typing, form submission, etc.

## addEventListener()

\`\`\`javascript
const button = document.querySelector('#myButton');

button.addEventListener('click', (event) => {
    console.log('Button clicked!');
    console.log('Event:', event);
});
\`\`\`

## Common Events

### Mouse Events
\`\`\`javascript
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mouseenter', handler);
element.addEventListener('mouseleave', handler);
\`\`\`

### Keyboard Events
\`\`\`javascript
input.addEventListener('keydown', (e) => {
    console.log('Key pressed:', e.key);
});

input.addEventListener('keyup', handler);
\`\`\`

### Form Events
\`\`\`javascript
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn form submit mặc định
    const formData = new FormData(form);
    console.log(formData.get('username'));
});

input.addEventListener('input', handler);
input.addEventListener('change', handler);
\`\`\`

## Event Object

\`\`\`javascript
button.addEventListener('click', (event) => {
    event.preventDefault(); // Ngăn hành động mặc định
    event.stopPropagation(); // Ngăn event bubbling
    
    console.log(event.target); // Element được click
    console.log(event.currentTarget); // Element có listener
});
\`\`\`

## Event Delegation

Thay vì add listener cho mỗi element, add vào parent:

\`\`\`javascript
document.querySelector('#list').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('List item clicked:', e.target.textContent);
    }
});
\`\`\`

## Remove Event Listener

\`\`\`javascript
function handleClick() {
    console.log('Clicked');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
\`\`\`

## Best Practices

1. Sử dụng event delegation cho dynamic elements
2. Remove listeners khi không cần
3. preventDefault() cho form handling
4. stopPropagation() cẩn thận
5. Use named functions để dễ remove

Event handling là core skill của JavaScript development!
    `,
  },
  "11": {
    title: "Java Streams API: Xử lý dữ liệu hàm thực",
    category: "Java",
    date: "25/12/2024",
    difficulty: "Trung bình",
    content: `
Java Streams API, được giới thiệu trong Java 8, là một cách hiện đại và mạnh mẽ để xử lý dữ liệu từ collections một cách declarative.

## Streams là gì?

Stream là một sequence của elements hỗ trợ các sequential và parallel aggregate operations.

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.stream()
    .filter(n -> n > 2)
    .map(n -> n * 2)
    .forEach(System.out::println); // 6, 8, 10
\`\`\`

## Stream Operations

### Intermediate Operations (Lazy)
\`\`\`java
stream.filter(predicate)
stream.map(function)
stream.sorted()
stream.distinct()
\`\`\`

### Terminal Operations
\`\`\`java
stream.forEach(consumer)
stream.collect(collector)
stream.reduce(accumulator)
stream.findFirst()
\`\`\`

## Practical Examples

### Filtering
\`\`\`java
List<String> words = Arrays.asList("hello", "world", "java");
List<String> filtered = words.stream()
    .filter(w -> w.length() > 4)
    .collect(Collectors.toList()); // [hello, world]
\`\`\`

### Mapping
\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3);
List<Integer> doubled = numbers.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList()); // [2, 4, 6]
\`\`\`

### Reducing
\`\`\`java
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b); // 6
\`\`\`

## Parallel Streams

\`\`\`java
list.parallelStream()
    .filter(predicate)
    .collect(Collectors.toList());
\`\`\`

Streams API làm code functional và concise hơn rất nhiều!
    `,
  },
  "12": {
    title: "RESTful API với Java Spring Boot",
    category: "Java",
    date: "26/12/2024",
    difficulty: "Nâng cao",
    content: `
Spring Boot là framework phổ biến nhất để xây dựng REST APIs trong Java, giúp development nhanh và dễ dàng.

## Khởi tạo Spring Boot Project

Spring Boot project cấu trúc như sau:
- Controllers - xử lý HTTP requests
- Services - business logic
- Repositories - data access
- Models - entities

## Tạo REST Controller

\`\`\`java
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
\`\`\`

## Request/Response Handling

\`\`\`java
@PostMapping
public ResponseEntity<User> createUser(@RequestBody User user) {
    User saved = userService.saveUser(user);
    return ResponseEntity.status(HttpStatus.CREATED).body(saved);
}
\`\`\`

## Exception Handling

\`\`\`java
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> handleNotFound(ResourceNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }
}
\`\`\`

## Validation

\`\`\`java
public class User {
    @NotBlank(message = "Name is required")
    private String name;
    
    @Email
    private String email;
}
\`\`\`

## Best Practices

1. Sử dụng @Service cho business logic
2. Implement Repository interface
3. Handle exceptions globally
4. Validate input data
5. Use meaningful status codes

Spring Boot làm building REST APIs dễ dàng và professional!
    `,
  },
  "13": {
    title: "React Hooks: useState, useEffect và Custom Hooks",
    category: "JavaScript",
    date: "27/12/2024",
    difficulty: "Trung bình",
    content: `
React Hooks cho phép sử dụng state và lifecycle features trong functional components, thay thế class components.

## useState Hook

Quản lý state trong functional components:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
\`\`\`

## useEffect Hook

Thực hiện side effects như fetching data:

\`\`\`jsx
useEffect(() => {
    // Run after render
    fetchData();
    
    return () => {
        // Cleanup
        subscription.unsubscribe();
    };
}, [dependency]); // Re-run when dependency changes
\`\`\`

### Common Patterns

\`\`\`jsx
// Run once on mount
useEffect(() => {
    loadUser();
}, []);

// Run on dependency change
useEffect(() => {
    setTitle(user.name);
}, [user.id]);
\`\`\`

## Custom Hooks

Tạo reusable logic:

\`\`\`jsx
function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    
    return { values, handleChange };
}

// Usage
function LoginForm() {
    const { values, handleChange } = useForm({ email: '', password: '' });
    return (
        <form>
            <input name="email" value={values.email} onChange={handleChange} />
        </form>
    );
}
\`\`\`

## Other Important Hooks

- useContext: Access context values
- useReducer: Complex state logic
- useCallback: Memoize functions
- useMemo: Memoize values

Hooks làm React cleaner và dễ understand hơn!
    `,
  },
  "14": {
    title: "TypeScript Basics: Type System và Interfaces",
    category: "JavaScript",
    date: "28/12/2024",
    difficulty: "Trung bình",
    content: `
TypeScript thêm static typing vào JavaScript, giúp catch errors sớm và code dễ maintain hơn.

## Basic Types

\`\`\`typescript
let name: string = "An";
let age: number = 20;
let active: boolean = true;
let items: string[] = ["a", "b"];
let union: string | number = "hello";
\`\`\`

## Interfaces

Define object shapes:

\`\`\`typescript
interface User {
    id: number;
    name: string;
    email: string;
    isActive?: boolean; // Optional
    readonly createdAt: Date; // Readonly
}

const user: User = {
    id: 1,
    name: "An",
    email: "an@example.com",
    createdAt: new Date()
};
\`\`\`

## Functions

\`\`\`typescript
function add(a: number, b: number): number {
    return a + b;
}

const greet = (name: string): string => {
    return \`Hello \${name}\`;
};

// Optional and default parameters
function process(id: number, name?: string): void {
    console.log(id, name);
}
\`\`\`

## Generics

Reusable components with types:

\`\`\`typescript
function getFirstItem<T>(arr: T[]): T {
    return arr[0];
}

const firstNum = getFirstItem<number>([1, 2, 3]);
const firstStr = getFirstItem<string>(["a", "b"]);
\`\`\`

## Classes

\`\`\`typescript
class User {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    getInfo(): string {
        return \`\${this.name} is \${this.age} years old\`;
    }
}
\`\`\`

## Type Aliases vs Interfaces

\`\`\`typescript
// Type Alias
type Person = {
    name: string;
    age: number;
};

// Interface
interface User {
    name: string;
    age: number;
}
\`\`\`

TypeScript makes JavaScript code safer and more maintainable!
    `,
  },
  "15": {
    title: "Web Performance Optimization: Caching và Minification",
    category: "JavaScript",
    date: "29/12/2024",
    difficulty: "Nâng cao",
    content: `
Web performance là yếu tố quan trọng ảnh hưởng đến user experience. Tìm hiểu các kỹ thuật tối ưu hóa.

## Caching Strategies

### Browser Caching
\`\`\`html
<!-- Cache for 1 year -->
<meta http-equiv="cache-control" content="max-age=31536000">
\`\`\`

### Service Worker
\`\`\`javascript
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/styles.css',
                '/script.js'
            ]);
        })
    );
});
\`\`\`

## Minification và Compression

### CSS Minification
\`\`\`css
/* Before */
body {
    margin: 0;
    padding: 0;
}

/* After minification */
body{margin:0;padding:0}
\`\`\`

### Gzip Compression
\`\`\`javascript
// Server-side
res.set('Content-Encoding', 'gzip');
\`\`\`

## Image Optimization

\`\`\`html
<!-- Responsive images -->
<img srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
     src="medium.jpg" alt="Image">

<!-- WebP with fallback -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Image">
</picture>
\`\`\`

## Lazy Loading

\`\`\`jsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HeavyComponent />
        </Suspense>
    );
}
\`\`\`

## Code Splitting

\`\`\`javascript
// Webpack
import(/* webpackChunkName: "math" */ './math.js')
    .then((math) => {
        console.log(math.add(2, 3));
    });
\`\`\`

## Performance Metrics

- **FCP** (First Contentful Paint)
- **LCP** (Largest Contentful Paint)
- **CLS** (Cumulative Layout Shift)
- **FID** (First Input Delay)

## Tools

- PageSpeed Insights
- Lighthouse
- WebPageTest
- Chrome DevTools

Optimize performance để users có better experience!
    `,
  },
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = blogContent[id]

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold">Bài viết không tồn tại</h1>
          <Button asChild className="mt-4">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại Blog
            </Link>
          </Button>

          <div className="space-y-4 mb-8">
            <Badge variant="secondary" className="text-sm">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-balance">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4" />
                {post.difficulty}
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="text-foreground leading-relaxed space-y-6">
              {post.content.split("\n\n").map((paragraph: string, index: number) => {
                if (paragraph.startsWith("```")) {
                  const code = paragraph.replace(/```\w*\n?/g, "").trim()
                  return (
                    <pre key={index} className="bg-secondary p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm font-mono">{code}</code>
                    </pre>
                  )
                } else if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                } else if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                      {paragraph.replace("### ", "")}
                    </h3>
                  )
                } else if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((line) => line.startsWith("- "))
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-4">
                      {items.map((item, i) => (
                        <li key={i} className="text-foreground">
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  )
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-foreground">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
