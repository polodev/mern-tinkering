# to increase port max_user_watches in ubuntu

~~~bash
echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
~~~