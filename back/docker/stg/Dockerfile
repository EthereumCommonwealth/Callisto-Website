FROM python:3.6

COPY base.txt /tmp/base.txt
COPY production.txt /tmp/production.txt
RUN pip install -r /tmp/production.txt

COPY run-production.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/run-production.sh

WORKDIR /app/back

CMD ["run-stg.sh"]
