const aCourse = {
  code: 'CSE121b',
  name: 'Javascript Language',
  sections: [
    {
      sectionNum: 1,
      roomNum: 'STC 353',
      enrolled: 26,
      days: 'TTh',
      instructor: 'Bro T',
    },
    {
      sectionNum: 2,
      roomNum: 'STC 347',
      enrolled: 28,
      days: 'TTh',
      instructor: 'Sis A',
    },
  ],
  enrollStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSection(this.sections);
    }
  },
  dropStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled--;
      renderSection(this.sections);
    }
  },
  changeStudent: function (sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
      renderSection(this.sections);
    }
  },
};

function courseInfo(course) {
  const courseName = document.getElementById('courseName');
  const courseCode = document.getElementById('courseCode');
  courseName.textContent = course.name;
  courseCode.textContent = course.code;
}

function renderSection(sections) {
  const courseSection = document.getElementById('sections');
  const addSection = sections.map(
    (section) =>
      `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    </tr>`
  );
  courseSection.innerHTML = addSection.join('');
}

// function enrollStudent() {
//   const sectionNum = document.getElementById('sectionNumber').value;
//   aCourse.enrollStudent(sectionNum);
// }

// function dropStudent() {
//   const sectionNum = document.getElementById('sectionNumber').value;
//   aCourse.dropStudent(sectionNum);
// }

function changeStudent(input) {
  const sectionNum = document.getElementById('sectionNumber').value;
  aCourse.changeStudent(sectionNum, input);
}

document
  .getElementById('enrollStudent')
  .addEventListener('click', changeStudent);

document.getElementById('dropStudent').addEventListener('click', () => {
  changeStudent(false);
});

courseInfo(aCourse);
renderSection(aCourse.sections);
