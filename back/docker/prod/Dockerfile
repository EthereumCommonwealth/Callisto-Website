FROM python:3.6

RUN mkdir /app

WORKDIR /app/back

COPY production.py /tmp/production.txt
RUN pip install -r /tmp/production.txt

COPY run-prod.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/run-prod.sh

CMD ["run-prod.sh"]
