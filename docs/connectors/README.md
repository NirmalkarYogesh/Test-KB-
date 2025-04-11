# Connectors

DNIF provides various connectors to integrate with different data sources and platforms. This section documents the setup and configuration of these connectors.

## Supported Connectors

### Cloud Services
- [AWS CloudTrail](aws/cloudtrail.md)
- [Azure Event Hub](azure/event-hub.md)
- [GCP Pub/Sub](gcp/pubsub.md)

### Security Tools
- [CrowdStrike](crowdstrike.md)
- [Darktrace](darktrace.md)
- [FireEye](fireeye.md)

### Collaboration Tools
- [Slack](slack.md)
- [Microsoft Teams](microsoft/teams.md)
- [Zoom](zoom.md)

### Identity Providers
- [Okta](okta.md)
- [OneLogin](onelogin.md)
- [Auth0](auth0.md)

## Connector Configuration

### Prerequisites
1. Valid credentials for the target platform
2. Required permissions and access
3. Network connectivity between DNIF and the target platform

### Configuration Steps
1. Add a new connector in DNIF
2. Configure authentication
3. Set up data collection parameters
4. Configure parsing rules
5. Test the connection

## Troubleshooting

Common issues and their solutions:
1. Authentication failures
2. Connection timeouts
3. Data parsing errors
4. Rate limiting

For detailed troubleshooting steps, refer to the [Troubleshooting Guide](../troubleshooting/connectors.md). 