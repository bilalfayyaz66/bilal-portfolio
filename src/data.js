export const profile = {
  name: "Bilal Fayyaz",
  role: "AI Engineer & Data Scientist",
  intro:
    "I’m an AI Engineer and Data Science practitioner focused on building practical AI systems, data pipelines, automation workflows, and computer vision solutions. I work across machine learning, agentic AI, big data analytics, and MLOps to turn raw data and business requirements into reliable technical solutions.",
  availability:
    "Open to AI Engineering, Data Science, Computer Vision, Automation, MLOps, and Data Engineering roles.",
  email: "bilalfayyaz328@gmail.com",
  phone: "+923030595057",
  location: "Pakistan",
  linkedin: "https://www.linkedin.com/in/bilal-fayyaz-4467b4249",
  github: "https://github.com/bilalfayyaz66",
};

export const skillGroups = [
  {
    title: "AI Engineering",
    skills: [
      "Agentic AI systems",
      "RAG pipelines",
      "LLM application design",
      "Prompt engineering",
      "AI automation",
      "Model evaluation",
      "API-based AI products",
      "Generative AI workflows",
    ],
  },
  {
    title: "Computer Vision & ML",
    skills: [
      "Computer vision pipelines",
      "OpenCV",
      "Image classification",
      "Pattern recognition",
      "Machine learning",
      "Deep learning",
      "Anomaly detection",
      "Recommendation systems",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "ETL pipelines",
      "Data warehousing",
      "Dimensional modeling",
      "Apache Spark",
      "PySpark",
      "Hadoop / HDFS",
      "Hive / HBase",
      "Kafka basics",
      "Airflow",
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      "Python",
      "SQL",
      "C++",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "FastAPI",
      "Docker",
      "MLflow",
      "GitHub Actions",
      "AWS",
      "GCP",
      "Vercel",
    ],
  },
];

export const projects = [
  {
    title: "MarketMinds — AI Investment Intelligence Dashboard",
    category: "AI FinTech Platform",
    repo: "https://github.com/bilalfayyaz66/MarketMinds-AI-Powered-Investment-Intelligence-Dashboard",
    featured: true,
    summary:
      "Designed an AI-powered investment intelligence dashboard that combines market data, AI prediction, sentiment analysis, chart pattern recognition, portfolio analytics, authentication, and real-time decision support in one platform.",
    businessImpact:
      "Built to reduce fragmented investment analysis workflows by combining market data, AI signals, technical analysis, sentiment, portfolio risk, and dashboard visualization. The platform is designed for students, beginner investors, and SMEs that need organized and affordable market intelligence.",
    highlights: [
      "Designed modular layers for data collection, AI analysis, backend APIs, frontend dashboard, authentication, deployment, and monitoring.",
      "Included AI modules for price prediction, chart pattern recognition, financial sentiment analysis, AI signal generation, portfolio optimization, and reinforcement learning-based trading signals.",
      "Used FastAPI-style backend services, React dashboard concepts, Google OAuth, JWT sessions, Docker, cloud deployment planning, and real-time API design.",
      "Documented testing across economic data collection, ML training, pattern recognition, sentiment analysis, portfolio optimization, Google Auth, deployment health, and end-to-end integration.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "React.js",
      "Machine Learning",
      "Computer Vision",
      "OpenCV",
      "FinBERT",
      "LSTM",
      "XGBoost",
      "Portfolio Analytics",
      "Google OAuth",
      "Docker",
    ],
  },
  {
    title: "Big Data Analytics Pipeline for Online Retail Transactions",
    category: "Data Engineering / Big Data",
    repo: "https://github.com/bilalfayyaz66/Big-Data-Analytics-Pipeline-for-Online-Retail-Transactions",
    summary:
      "Built an end-to-end Hadoop ecosystem pipeline for large-scale online retail transaction analytics using HDFS, HBase, Hive, Spark, and PySpark.",
    businessImpact:
      "Converted raw retail transactions into business-ready analytics for product revenue, country revenue, monthly trends, and high-value customer analysis. The pipeline supports faster reporting and better sales decision-making on distributed data.",
    highlights: [
      "Processed 805,549 cleaned retail transaction records after preprocessing.",
      "Compared Hive and Spark execution behavior for analytics workloads.",
      "Spark completed the full analytics workflow in a single PySpark pipeline.",
    ],
    tech: [
      "Python",
      "Hadoop",
      "HDFS",
      "HBase",
      "Hive",
      "Spark",
      "PySpark",
      "Retail Analytics",
    ],
  },
  {
    title: "MLOps Pipeline for Online Purchase Intention Prediction",
    category: "MLOps / Machine Learning",
    repo: "https://github.com/bilalfayyaz66/MLOps-Pipeline-for-Online-Purchase-Intention-Prediction",
    summary:
      "Implemented a production-style MLOps workflow for predicting whether an online shopping session will convert into a purchase.",
    businessImpact:
      "Designed the system around reproducibility, deployment readiness, and observability, making the model useful beyond notebooks. This type of pipeline helps e-commerce teams identify buying intent and monitor model behavior in production.",
    highlights: [
      "Used MLflow for experiment tracking and FastAPI for model serving.",
      "Containerized services with Docker and monitored them using Prometheus and Grafana.",
      "XGBoost reached 0.9039 accuracy and 0.9305 ROC-AUC with about 7.87 ms average latency.",
    ],
    tech: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "MLflow",
      "FastAPI",
      "Docker",
      "Prometheus",
      "Grafana",
      "GitHub Actions",
    ],
  },
  {
    title: "Fraud Detection System",
    category: "Machine Learning / Risk Analytics",
    repo: "https://github.com/bilalfayyaz66/fraud-detection-system",
    summary:
      "Created a fraud detection project focused on transaction-risk modeling, model complexity comparison, cost-sensitive learning, inference deployment, monitoring alerts, and Kubernetes-style deployment configuration.",
    businessImpact:
      "Targets a high-value business problem where better fraud classification can reduce financial loss, improve review workflows, and support safer digital transactions.",
    highlights: [
      "Includes cost-sensitive learning experiments for imbalanced fraud data.",
      "Contains monitoring alert logic and Kubernetes inference deployment files.",
      "Structured with source code, tests, Docker assets, and CI workflow files.",
    ],
    tech: [
      "Python",
      "Machine Learning",
      "Fraud Analytics",
      "Docker",
      "Kubernetes",
      "Testing",
      "Monitoring",
    ],
  },
  {
    title: "n8n Fiverr Trend Monitor Dashboard",
    category: "Automation / Analytics Dashboard",
    repo: "https://github.com/bilalfayyaz66/n8n-fiverr-trend-monitor-dashboard",
    summary:
      "Built an n8n automation system that monitors public trend signals and turns them into structured Fiverr service opportunities with a live dashboard.",
    businessImpact:
      "Automates market research for freelancers and agencies by finding service demand signals, buyer intent, gig ideas, keywords, add-ons, and seasonal angles from public sources.",
    highlights: [
      "Uses scheduled n8n workflows for trend collection and processing.",
      "Stores structured results in Google Sheets and exports XLSX files.",
      "Serves a readable dashboard through an n8n webhook.",
    ],
    tech: [
      "n8n",
      "Docker",
      "Google Sheets",
      "JavaScript",
      "Webhooks",
      "XLSX",
      "Dashboarding",
    ],
  },
  {
    title: "Plant Disease Classification using Spark",
    category: "Computer Vision / Distributed ML",
    repo: "https://github.com/bilalfayyaz66/Plant-Disease-Classification-Spark",
    summary:
      "Developed a Spark-based image classification pipeline for crop disease detection using image feature extraction and classical ML models.",
    businessImpact:
      "Supports agriculture-focused AI by helping detect plant diseases from image data. This can assist early diagnosis workflows and reduce manual inspection effort.",
    highlights: [
      "Loaded image data using Spark binaryFile API.",
      "Extracted HOG and HSV histogram features from images.",
      "Compared Logistic Regression, Random Forest, Gradient Boosted Trees, and Linear SVM.",
    ],
    tech: [
      "PySpark",
      "OpenCV",
      "Scikit-learn",
      "NumPy",
      "Matplotlib",
      "Computer Vision",
    ],
  },
  {
    title: "Data Warehouse ETL Pipeline",
    category: "Data Warehousing / ETL",
    repo: "https://github.com/bilalfayyaz66/data-warehouse-project",
    summary:
      "Designed a complete ETL solution for a data warehouse using star schema modeling, incremental loading, multithreading, and data quality checks.",
    businessImpact:
      "Turns transactional and master data into structured warehouse tables for decision support, reporting, and reliable analytics. The design improves data consistency, load performance, and analytical readiness.",
    highlights: [
      "Implemented hybrid join logic and batch processing.",
      "Used SCD Type 1 style upsert operations for incremental loading.",
      "Added logging, validation, rollback handling, and performance metrics.",
    ],
    tech: [
      "Python",
      "SQL",
      "ETL",
      "Data Warehouse",
      "Star Schema",
      "Data Quality",
      "Multithreading",
    ],
  },
  {
    title: "Energy Anomaly Detection using GRU and GRU-Autoencoder",
    category: "Deep Learning / Time Series",
    repo: "https://github.com/bilalfayyaz66/energy-anomaly-gru-ae",
    summary:
      "Reproduced and extended a two-step anomaly detection pipeline for household energy consumption using a GRU forecaster and GRU autoencoder.",
    businessImpact:
      "Useful for monitoring energy usage patterns, detecting unusual consumption behavior, and supporting preventive action in smart energy systems.",
    highlights: [
      "Uses UCI household electric power consumption data.",
      "Combines forecasting and reconstruction-error based anomaly detection.",
      "Applies rolling-stat features and EMA thresholding.",
    ],
    tech: [
      "Python",
      "GRU",
      "Autoencoder",
      "Deep Learning",
      "Time Series",
      "Anomaly Detection",
    ],
  },
  {
    title: "FilmTrust Recommendation System with PySpark",
    category: "Recommendation Systems / PySpark",
    repo: "https://github.com/bilalfayyaz66/FilmTrust-Recommendation-System-PySpark",
    summary:
      "Implemented a movie recommendation system using the FilmTrust dataset and PySpark, including collaborative filtering with ALS and rating-based content filtering.",
    businessImpact:
      "Demonstrates how recommendation engines can personalize user experiences, improve discovery, and support engagement in media and e-commerce platforms.",
    highlights: [
      "Loaded and processed ratings and trust relationship data using PySpark.",
      "Built ALS collaborative filtering for personalized recommendations.",
      "Achieved RMSE of 0.5746 in recommendation evaluation.",
    ],
    tech: [
      "PySpark",
      "ALS",
      "Recommendation Systems",
      "Collaborative Filtering",
      "EDA",
      "RMSE",
    ],
  },
  {
    title: "SVD Image Compression using Linear Algebra",
    category: "Computer Vision / Numerical Computing",
    repo: "https://github.com/bilalfayyaz66/SVD-Image-Compression-Using-Linear-Algebra",
    summary:
      "Built an image compression project using Singular Value Decomposition and low-rank matrix approximation.",
    businessImpact:
      "Shows how mathematical optimization can reduce image storage requirements while preserving important visual information, which is useful for lightweight media processing systems.",
    highlights: [
      "Uses grayscale image matrices and SVD decomposition.",
      "Reconstructs compressed images with selected singular values.",
      "Evaluates compression quality using PSNR and visual comparisons.",
    ],
    tech: ["Python", "NumPy", "Pillow", "Matplotlib", "SVD", "Image Processing"],
  },
];