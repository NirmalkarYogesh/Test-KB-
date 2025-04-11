# Signal Suppression

Signal suppression in DNIF allows you to manage and control alert noise by suppressing specific signals based on defined rules. This guide explains how to configure and manage signal suppression.

## What is Signal Suppression?

Signal suppression helps you:
- Reduce alert fatigue
- Focus on important events
- Manage false positives
- Create exception rules

## Creating Suppression Rules

### Step 1: Access Signal Suppression

1. Log in to the DNIF console
2. Navigate to **Security** > **Signal Suppression**
3. Click **Create Rule**

### Step 2: Configure Rule

1. **Basic Information**
   - Rule name
   - Description
   - Priority

2. **Conditions**
   - Select signal type
   - Define matching criteria
   - Set time range

3. **Action**
   - Choose suppression action
   - Set duration
   - Configure notifications

## Example Rules

### 1. Suppress Known False Positives
```yaml
rule:
  name: "Suppress Known False Positives"
  description: "Suppress alerts from known false positive sources"
  signal_type: "malware_detection"
  conditions:
    - field: "source_ip"
      operator: "in"
      value: ["192.168.1.100", "192.168.1.101"]
  action:
    type: "suppress"
    duration: "24h"
```

### 2. Time-based Suppression
```yaml
rule:
  name: "Maintenance Window Suppression"
  description: "Suppress alerts during maintenance windows"
  signal_type: "all"
  conditions:
    - field: "time"
      operator: "between"
      value: ["02:00", "04:00"]
  action:
    type: "suppress"
    duration: "2h"
```

## Best Practices

1. **Rule Organization**
   - Use clear naming conventions
   - Group related rules
   - Document rule purposes

2. **Rule Management**
   - Regularly review rules
   - Update as needed
   - Monitor effectiveness

3. **Performance**
   - Optimize rule conditions
   - Use appropriate time ranges
   - Monitor system impact

## Troubleshooting

Common issues and solutions:

1. **Rules not working**
   - Check rule conditions
   - Verify signal types
   - Review rule priority

2. **Unexpected suppression**
   - Review rule logic
   - Check time ranges
   - Verify conditions

3. **Performance issues**
   - Optimize rule conditions
   - Reduce rule complexity
   - Monitor system resources 