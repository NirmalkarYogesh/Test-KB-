# Authentication and Access Control

DNIF provides comprehensive authentication and access control mechanisms to secure your SIEM platform. This guide explains the authentication methods and how to configure them.

## Supported Authentication Methods

1. **Local Authentication**
   - Username/password
   - Password policies
   - Account locking

2. **LDAP Authentication**
   - Active Directory integration
   - LDAP server configuration
   - Group mapping

3. **SAML Authentication**
   - Single Sign-On (SSO)
   - Identity Provider configuration
   - Attribute mapping

4. **Two-Factor Authentication (2FA)**
   - TOTP-based 2FA
   - Email-based 2FA
   - SMS-based 2FA

## Configuration Steps

### 1. Local Authentication

```yaml
authentication:
  local:
    enabled: true
    password_policy:
      min_length: 8
      require_numbers: true
      require_special_chars: true
      expire_days: 90
    account_lockout:
      max_attempts: 5
      lockout_duration: 30m
```

### 2. LDAP Authentication

```yaml
authentication:
  ldap:
    enabled: true
    server:
      url: "ldap://ldap.example.com:389"
      base_dn: "dc=example,dc=com"
      bind_dn: "cn=admin,dc=example,dc=com"
    group_mapping:
      - ldap_group: "Security Admins"
        dnif_role: "admin"
      - ldap_group: "Security Analysts"
        dnif_role: "analyst"
```

### 3. SAML Authentication

```yaml
authentication:
  saml:
    enabled: true
    idp:
      entity_id: "https://idp.example.com"
      sso_url: "https://idp.example.com/sso"
      certificate: |
        -----BEGIN CERTIFICATE-----
        ...
        -----END CERTIFICATE-----
    attribute_mapping:
      username: "email"
      groups: "memberOf"
```

## Access Control

### Role-Based Access Control (RBAC)

1. **Predefined Roles**
   - Administrator
   - Security Analyst
   - Viewer
   - Custom roles

2. **Permissions**
   - Dashboard access
   - Report generation
   - Configuration changes
   - User management

### Example Role Configuration

```yaml
roles:
  admin:
    permissions:
      - "manage_users"
      - "configure_system"
      - "view_all_data"
      - "generate_reports"
      
  analyst:
    permissions:
      - "view_data"
      - "create_workbooks"
      - "generate_reports"
      
  viewer:
    permissions:
      - "view_data"
      - "view_reports"
```

## Best Practices

1. **Authentication**
   - Enable 2FA for all users
   - Use strong password policies
   - Regularly rotate credentials
   - Monitor failed login attempts

2. **Access Control**
   - Follow principle of least privilege
   - Regularly review permissions
   - Document role assignments
   - Monitor access patterns

3. **Security**
   - Enable audit logging
   - Monitor authentication events
   - Regular security reviews
   - Incident response planning

## Troubleshooting

Common issues and solutions:

1. **Authentication Failures**
   - Check credentials
   - Verify server connectivity
   - Review error logs
   - Check account status

2. **Access Issues**
   - Verify role assignments
   - Check permission settings
   - Review group memberships
   - Check session status

3. **Configuration Problems**
   - Validate settings
   - Check server connectivity
   - Review error messages
   - Test configurations 