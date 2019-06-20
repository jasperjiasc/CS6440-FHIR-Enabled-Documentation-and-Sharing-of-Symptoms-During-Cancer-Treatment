HDAP Python/Flask Template
=
This project provides a simple "Hello World!" template for developing a Python/Flask application for HDAP.

How to Run
-
To run the application
```
docker-compose up -d
```
The application can be accessed in a web browser with the following URL `http://localhost:5000`

Troubleshooting
-
If your machine is configured so that your docker instance is running in a virtual machine then the `http://localhost:5000` URL will not work. Try the following:
- run `docker-machine ip default` to view the IP address assigned to the VM running the docker instance.
- then run the following URL in a web browser `http://<ip_addr_returned>:5000` where ip_addr_returned is the IP address returned by the `docker-machine ip default` command.