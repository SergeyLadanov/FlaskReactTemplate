#!/usr/bin/env python3
try:
    from cheroot.wsgi import Server as WSGIServer, PathInfoDispatcher
except ImportError:
    from cherrypy.wsgiserver import CherryPyWSGIServer as WSGIServer, WSGIPathInfoDispatcher as PathInfoDispatcher

from web import app
import subprocess
import sys
import os
import mqtt_config as MQTT

path = os.path.realpath(os.path.dirname(sys.argv[0]))

command = ""
if MQTT.Enable:
    if len(MQTT.LwtTopic) != 0 and len(MQTT.LwtOnlineMsg) != 0 and len(MQTT.LwtOfflineMsg) != 0:
        command = [path + "/hdht/build/hdht", MQTT.Host, MQTT.Port, MQTT.Username, MQTT.Password, MQTT.TempTopic, MQTT.HumTopic, MQTT.LwtTopic, MQTT.LwtOnlineMsg, MQTT.LwtOfflineMsg]
    else:
        command = [path + "/hdht/build/hdht", MQTT.Host, MQTT.Port, MQTT.Username, MQTT.Password, MQTT.TempTopic, MQTT.HumTopic] 
else:
    command = [path + "/hdht/build/hdht"]

p = subprocess.Popen(command)


d = PathInfoDispatcher({'/': app})
server = WSGIServer(('0.0.0.0', 5003), d)

if __name__ == '__main__':
   try:
      server.start()
   except KeyboardInterrupt:
      server.stop()
