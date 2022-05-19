#! /usr/bin/ python3

import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0, '/home/n23-webb/gameapp/')

from app import app as application