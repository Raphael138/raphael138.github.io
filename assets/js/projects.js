class Project {
  constructor(title, description, ongoing = false, image = null) {
      this.title = title;
      this.description = description;
      this.ongoing = ongoing;
      this.image = image;
  }

  render() {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'project';

      // Title
      const titleElement = document.createElement('h2');
      titleElement.innerHTML = this.title;

      // Description
      const descriptionElement = document.createElement('p');
      descriptionElement.innerHTML = this.description;

      // Status Tag
      const statusTag = document.createElement('span');
      statusTag.className = `status ${this.ongoing ? 'ongoing' : ''}`;
      statusTag.textContent = this.ongoing ? 'Ongoing' : 'Completed';

      // Append elements to the project container
      projectDiv.appendChild(titleElement);
      projectDiv.appendChild(descriptionElement);
      if (this.ongoing) {
        projectDiv.appendChild(statusTag);
      }

      // Optional Image
      if (this.image) {
        const imgElement = document.createElement('img');
        imgElement.src = this.image;
        imgElement.alt = `${this.title} image`;
        imgElement.className = 'project-image';
        projectDiv.appendChild(imgElement);
      }
    
      return projectDiv;
  }
}

// Add Projects
const projectsContainer = document.getElementById('projects-container');

// Example Projects
const projects = [
  new Project(
      'LoRA Score',
      'A final research project for CS 6784, where we explore the use of LoRA to quantify the difficulty of a dataset across both vision and language domains. More specifically, we are investigating the correlation between LoRA rank and the complexity of a dataset.',
      true,
  ),
  new Project(
      'Brain Hemorrhage Segmentation',
      'Computer vision techniques for medical image analysis, focusing on segmenting brain hemorrhages from CT scans.',
      true,
      'assets/img/brain_segmentation.png'
  ),
  new Project(
    'Pinhole Tracker',
    `A model of a tracking device that follows a moving target using a noisy depth sensor model. The depth sensor uses pinhole camera 
    math to visualize a 3D point cloud with noise simulation. You can explore the details in this <a href="https://github.com/Raphael138/Pinhole-Tracker" target="_blank">GitHub repository</a>. 
    <div style="text-align: center;">
    <img src="https://github.com/Raphael138/Pinhole-Tracker/blob/main/tracking_blurry.gif?raw=true" style="width:400px; margin-bottom:-40px;">
    </div>`,
    false,
  ),
  new Project(
    'Portfolio Optimizer',
    `A portfolio optimizer which maximizes Sharpe ratio and expected returns with a deep learning backbone: LSTMs for time series predictions and BERT for sentiment analysis. 
    You can access the final website <a href="https://deep-portfolio-optimization.streamlit.app/" target="_blank">here</a>, 
    and explore the code on <a href="https://github.com/JaMoTh-AI/Deep-Portfolio-Optimization/tree/main" target="_blank">GitHub</a>.`,
    false,
    'assets/img/stock_prediction.png'
  ),
  new Project(
    'CABDRIVER',
    `This <a href="https://github.com/Raphael138/CABDRIVER/blob/main/CABDRIVER.ipynb" target="_blank">project</a> applies differential privacy 
    techniques to develop an algorithm which retains the integrity of the dataset, ie. aggregate heatmaps, while encoding users\' geolocation 
    data to be fully anonymous.`,
    false,
    'assets/img/cabdriver_img.png'
  ),
];

// Render all projects
projects.forEach(project => {
  projectsContainer.appendChild(project.render());
});