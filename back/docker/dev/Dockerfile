FROM python:3.6

RUN apt-get update && apt-get install -y gcc ssh openssh-server gettext postgresql-client libpq-dev \
    libjpeg-dev wget zsh
RUN mkdir -p /root/.ssh && chmod 0700 /root/.ssh

EXPOSE 22

COPY entry.sh /entry.sh
RUN chmod 0777 /entry.sh
RUN chmod +x /entry.sh


COPY base.txt /tmp/base.txt
COPY dev.txt /tmp/dev.txt
RUN pip install -r /tmp/dev.txt

RUN mkdir /var/run/sshd

RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

RUN chsh -s /bin/zsh root

ENTRYPOINT ["/entry.sh"]

CMD ["/usr/sbin/sshd", "-D", "-f", "/etc/ssh/sshd_config"]
