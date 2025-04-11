# Syslog Data Ingestion

DNIF supports ingesting logs from various devices and applications using the Syslog protocol. This guide explains how to configure Syslog data ingestion in DNIF.

## Supported Syslog Formats

- RFC 3164 (BSD Syslog)
- RFC 5424 (IETF Syslog)
- Custom Syslog formats

## Configuration Steps

### 1. Configure Syslog Server

1. Log in to the DNIF console
2. Navigate to **Data Sources** > **Syslog**
3. Click **Add Syslog Server**
4. Configure the following parameters:
   - Port: Default is 514 (UDP) or 6514 (TCP)
   - Protocol: UDP or TCP
   - TLS: Enable for secure connections
   - IP Whitelist: Add allowed source IPs

### 2. Configure Parsing Rules

1. Navigate to **Parsers** > **Syslog**
2. Create a new parser or use an existing one
3. Configure the parsing rules based on your log format
4. Test the parser with sample logs

### 3. Configure Enrichment

1. Navigate to **Enrichment** > **Syslog**
2. Add enrichment rules for:
   - IP addresses
   - Hostnames
   - User information
   - Custom fields

## Example Configuration

```yaml
syslog_server:
  port: 514
  protocol: udp
  tls: false
  allowed_ips:
    - 192.168.1.0/24

parser:
  format: rfc3164
  timezone: UTC
  custom_fields:
    - name: device_type
      regex: "device=(\\w+)"
```

## Troubleshooting

Common issues and solutions:

1. **Logs not appearing in DNIF**
   - Check firewall rules
   - Verify port configuration
   - Check network connectivity

2. **Parsing errors**
   - Verify log format
   - Check parser configuration
   - Test with sample logs

3. **Performance issues**
   - Monitor system resources
   - Check for log volume spikes
   - Optimize parser configuration

## Best Practices

1. Use TCP for reliable delivery
2. Enable TLS for secure transmission
3. Configure IP whitelisting
4. Monitor log volume and system resources
5. Regularly test and update parsers 