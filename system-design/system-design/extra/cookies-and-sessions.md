---
description: What are the differences between cookies and sessions?
---

# Cookies and Sessions

The diagram below shows how they work.

<figure><img src="../../../.gitbook/assets/image (1).png" alt=""><figcaption><p>Cookies and Sessions</p></figcaption></figure>

Cookies and sessions are both used to carry user information over HTTP requests, including user login status, user permissions, etc.

* Cookies\
  Cookies typically have size limits (4KB). They carry small pieces of information and are stored on the users’ devices. Cookies are sent with each subsequent user request. Users can choose to ban cookies in their browsers.
* Sessions\
  Unlike cookies, sessions are created and stored on the server side. There is usually a unique session ID generated on the server, which is attached to a specific user session. This session ID is returned to the client side in a cookie. Sessions can hold larger amounts of data. Since the session data is not directly accessed by the client, the session offers more security.

### Reference

[https://blog.bytebytego.com/i/139484811/what-are-the-differences-between-cookies-and-sessions](https://blog.bytebytego.com/i/139484811/what-are-the-differences-between-cookies-and-sessions)
