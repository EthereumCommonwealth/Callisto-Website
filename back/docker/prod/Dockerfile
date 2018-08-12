FROM python:3.6

COPY production.py /tmp/production.txt
RUN pip install -r /tmp/production.txt

COPY run-prod.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/run-prod.sh

WORKDIR /app/back

CMD ["run-prod.sh"]
