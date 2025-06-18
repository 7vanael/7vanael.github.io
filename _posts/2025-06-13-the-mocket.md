---
layout: post
title: "The Mocket"
date: 2025-06-13
---

## When is a Socket not a socket?

When you find you're doing things on a server and you want to test them, how 
do you test your code without actually requiring the other side of the connection?

Mocking is a great way to test more complex code with external dependencies. 
If we substitute a real externality with a mocked version, we can not only 
prescribe its behavior so we can test all functionalities (we don't want to 
have to wait for the error to occur to find out if we handle it as expected!) 
we can also use it to help report that or how it was used. 

A socket is one of the endpoints of a connection between two machines. But, I 
only have control over one! 
It has a lot of functions and functionalities that make actually having a connection 
possible, but when I'm just trying to figure out if my machine does the right thing 
when the other machine does each specific thing, I don't need all of that (and in fact, 
I don't want to have to manage all of that!)

So, you fake it!
````
ublic class MockSocket extends Socket {
    private final InputStream inputStream;
    private final OutputStream outputStream;
    private boolean closed = false;

    public MockSocket(String request){
        this.inputStream = new ByteArrayInputStream(request.getBytes(StandardCharsets.UTF_8));
        this.outputStream = new ByteArrayOutputStream();
    }

    @Override
    public InputStream getInputStream() {
        return inputStream;
    }
    .... //additional overrides as needed
````

Now I can create a socket that will read as just exactly what I want to test against, 
how convenient!

Now testing my connection behavior is as easy as setting up my mock, using it to 
make my connection and running it. 
````
String httpRequest = "GET index.html HTTP/1.1\r\nHost: localhost\r\n\r\n";
        mocket = new MockSocket(httpRequest);
        connection = factory.createConnection(mocket, rootDirectory, router);
        connection.run();
````

So... When is a Socket not a socket?
When it's a mocket, of course!

**Happy Friday!**