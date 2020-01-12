import React, { Component } from 'react';

const file = '~/src/Views/Experience/gwresume.docx'
const type = 'docx'

class MyResume extends Component {
  render() {
    return (
      <center>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vRRdiYmnx0lWIKhTzFCCuc35ufofCugwweLHkk66q0tqHjJwIKD_5jG2CFdnTef99eFTWYsrWjOkaMS/pub?embedded=true" width="950px" height="950px"></iframe>
      </center>
    );
  }
}

export default MyResume;