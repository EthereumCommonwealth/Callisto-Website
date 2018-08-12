FROM python:3.6

RUN mkdir /app

WORKDIR /app/back

RUN pip install -r production.txt

COPY run-prod.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/run-prod.sh

CMD ["run-prod.sh"]
