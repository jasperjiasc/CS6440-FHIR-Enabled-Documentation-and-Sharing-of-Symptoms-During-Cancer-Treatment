#Additional config info can be found here https://hub.docker.com/_/python/
FROM python:3

WORKDIR ./

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000
CMD [ "python", "./app.py" ]

#CMD [ "python", "./run.py" ]
