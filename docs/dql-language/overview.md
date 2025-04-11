# DNIF Query Language (DQL) Overview

DQL is a powerful query language designed specifically for security analytics and log analysis in DNIF. This guide provides an overview of DQL and its capabilities.

## What is DQL?

DQL (DNIF Query Language) is a domain-specific language that enables you to:
- Query and analyze security logs
- Create custom detections
- Generate reports and dashboards
- Perform threat hunting

## Key Features

1. **Simple Syntax**
   - Intuitive query structure
   - Easy to learn and use
   - Similar to SQL but optimized for security data

2. **Powerful Functions**
   - Time-based analysis
   - Statistical functions
   - Pattern matching
   - Correlation capabilities

3. **Real-time Processing**
   - Stream processing
   - Event correlation
   - Alert generation

## Basic Query Structure

```sql
SELECT <fields>
FROM <data_source>
WHERE <conditions>
GROUP BY <fields>
HAVING <conditions>
ORDER BY <fields>
LIMIT <number>
```

## Example Queries

### 1. Basic Search
```sql
SELECT src_ip, dest_ip, event_type
FROM firewall_logs
WHERE event_type = 'block'
  AND timestamp > now() - 1h
```

### 2. Aggregation
```sql
SELECT src_ip, count(*) as attempts
FROM auth_logs
WHERE status = 'failed'
  AND timestamp > now() - 24h
GROUP BY src_ip
HAVING attempts > 5
```

### 3. Correlation
```sql
SELECT a.src_ip, a.event_type, b.event_type
FROM logs a, logs b
WHERE a.src_ip = b.src_ip
  AND a.timestamp > now() - 1h
  AND b.timestamp > now() - 1h
```

## Best Practices

1. **Query Optimization**
   - Use appropriate time ranges
   - Limit result sets
   - Use efficient filters

2. **Data Selection**
   - Select only needed fields
   - Use appropriate data sources
   - Consider data volume

3. **Performance**
   - Monitor query execution time
   - Use indexes effectively
   - Optimize complex queries

## Next Steps

- [Basic Syntax](basic-syntax.md)
- [DQL Cheatsheet](cheatsheet.md)
- [Advanced Queries](../advanced-queries/README.md) 