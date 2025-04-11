# Device Integration

DNIF supports integration with various security devices and platforms. This section provides detailed documentation for integrating different devices with DNIF.

## Supported Devices

### Network Security
- [Cisco ASA](cisco/asa.md)
- [Palo Alto Networks](palo-alto.md)
- [FortiGate](fortinet/fortigate.md)
- [CheckPoint](checkpoint.md)

### Endpoint Security
- [Symantec ATP](symantec/atp.md)
- [Sophos Endpoint](sophos/endpoint.md)
- [Trend Micro](trend-micro.md)

### Web Security
- [Imperva WAF](imperva-waf.md)
- [F5 BIG-IP ASM](f5-bigip-asm.md)
- [Barracuda WAF](barracuda-waf.md)

### Identity and Access Management
- [CyberArk PIM](cyberark-pim.md)
- [Aruba ClearPass](aruba-clearpass.md)

## Integration Methods

DNIF supports multiple integration methods:
1. Syslog
2. API Integration
3. File-based Log Collection
4. Database Integration

## Common Configuration Steps

1. Configure the device to send logs to DNIF
2. Set up appropriate parsers in DNIF
3. Configure enrichment rules
4. Create relevant dashboards and alerts

## Troubleshooting

For common integration issues and troubleshooting steps, refer to the [Troubleshooting Guide](../troubleshooting/connectors.md). 