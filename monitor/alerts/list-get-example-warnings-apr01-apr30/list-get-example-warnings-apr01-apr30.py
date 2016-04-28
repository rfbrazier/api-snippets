# Download the Python helper library from twilio.com/docs/python/install
from datetime import datetime

import pytz
from twilio.rest.monitor import TwilioMonitorClient

# Your Account Sid and Auth Token from twilio.com/user/account
account_sid = "ACda6f132a3c49700934481addd5ce1659"
auth_token  = "{{ auth_token }}"
client = TwilioMonitorClient(account_sid, auth_token)

# A list of alert objects with the properties described above
alerts = client.alerts.list(
    start_date=datetime(2015, 4, 1, tzinfo=pytz.UTC).isoformat(),
    start_date=datetime(2015, 4, 30, 23, 59, 59, tzinfo=pytz.UTC).isoformat(),
    log_level="warning"
)
for alert in alerts:
    print alert.alert_text