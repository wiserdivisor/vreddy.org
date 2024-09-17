import "./contact.css";
import React from 'react';

function Contact() {
  return(
    <>
      <table>

        <thead>
          <td>Platform</td>
          <td>Link</td>
        </thead>

        <tbody>

          <tr>
            <td>Email</td>
            <td>
              <a href="mailto:dyrughei@gmail.com">
                yrughei@gmail.com
              </a>
            </td>
          </tr>

          <tr>
            <td>Instagram</td>
            <td>
              <a href="https://www.instagram.com/kerneldiver" target="_blank">
                kerneldiver
              </a>
            </td>
          </tr>

          <tr>
            <td>YouTube</td>
            <td>
              <a href="https://www.youtube.com/@kerneldiver" target="_blank">
                kerneldiver
              </a>
            </td>
          </tr>

          <tr>
            <td>Threads</td>
            <td><a href="https://www.threads.net/@kerneldiver">kerneldiver</a></td>
          </tr>

          <tr>
            <td>LinkedIn</td>
            <td>
              <a href="https://www.linkedin.com/in/vigneshmreddy" target="_blank">
                vigneshmreddy
              </a>
            </td>
          </tr>

        </tbody>
      </table>
    </>
  );

}

export default Contact;