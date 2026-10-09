// Site content. The components read everything from here.

export const profile = {
  name: 'Pranav',
  role: 'Robotics Software Engineer',
  location: 'Chennai, India',
  descriptors: ['robotics', 'software', 'engineer'], // [] hides the line
  tagline: 'Building the robots science fiction promised us.',
  bio: [
    'I understand a problem from first principles before reaching for abstractions. My experience in robotics: motion planning for a SCARA arm, a ROS 2 perception-to-manipulation pipeline on a Jetson, and imitation learning on LeRobot\'s SO-101 arms. What drives me is the fascination of robots operating with the code I write.',
    "Outside work, I'm obsessed with the humanoid robotics space, I rewatch Interstellar and Pacific Rim too often, and I believe robots are a big part of humanity's future.",
  ],
  skills: ['C++', 'Python', 'ROS 2', 'EKF', 'Motion Planning (A*)', 'OpenCV', 'YOLOv8 + TensorRT', 'PyTorch', 'Imitation Learning (LeRobot / ACT)', 'NVIDIA Jetson', 'Docker / Linux'],
  photo: '/photo-crop.jpg', // '' shows initials instead
  resumeUrl: '/Pranav_Resume.pdf', // '' hides the resume button
};

export const socials = {
  email: 'pranavrobotics.eng@gmail.com',
  github: 'https://github.com/ppranav04',
  linkedin: 'https://www.linkedin.com/in/ppranav04',
};

// Media files live in public/projects/<project>/; the first item is shown first.
export type Media = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  poster?: string; // still frame shown before the video loads
  position?: string; // CSS object-position, e.g. '50% 20%'
  label?: string; // corner tag, e.g. 'simulation'
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  status?: string[]; // e.g. 'in progress', shown above the title
  note?: string; // italic line under the description
  media?: Media[];
};

export const projects: Project[] = [
  {
    title: 'BT-101: Autonomous Manipulation Platform',
    description:
      'Imitation learning on LeRobot\'s SO-101 arms. I developed joystick and leader-follower teleop, and currently I\'m recording demonstrations to train an ACT policy.\nNext: Diffusion Policy and a voice-responsive assistant that moves expressively as it talks.',
    tech: ['Python', 'PyTorch', 'LeRobot', 'ACT', 'W&B'],
    repo: 'https://github.com/ppranav04/BT-101',
    featured: true,
    status: ['in progress'],
    media: [
      {
        type: 'video',
        src: '/projects/bt-101/leader-follower.mp4',
        poster: '/projects/bt-101/leader-follower-poster.jpg',
        alt: 'Leader-follower teleoperation of the SO-101 arm pair',
      },
      {
        type: 'video',
        src: '/projects/bt-101/joystick.mp4',
        poster: '/projects/bt-101/joystick-poster.jpg',
        alt: 'Joystick teleoperation of the SO-101 arm',
      },
    ],
  },
  {
    title: 'Robotics Algorithms from Scratch',
    description:
      'A study of state estimation, SLAM, planning and control, implementing each algorithm in Python and C++.\nState estimation: EKF (done), UKF (in progress).',
    tech: ['Python', 'C++17', 'Eigen', 'CMake'],
    repo: 'https://github.com/ppranav04/robotics-algorithms',
    status: ['in progress'],
    media: [
      {
        type: 'video',
        src: '/projects/robotics-algorithms/ekf-run.mp4',
        poster: '/projects/robotics-algorithms/ekf-run-poster.jpg',
        alt: 'EKF estimate (red) tracking ground truth (blue) around an 80 s loop while dead reckoning (grey) drifts away',
      },
      {
        type: 'image',
        src: '/projects/robotics-algorithms/ekf-evaluation.jpg',
        alt: 'EKF vs dead-reckoning position error over 80 s: EKF RMSE 0.43 m vs 2.23 m',
      },
      {
        type: 'image',
        src: '/projects/robotics-algorithms/ekf-cpp.jpg',
        alt: 'C++17/Eigen EKF port run on the same landmark scenario',
      },
    ],
  },
  {
    title: 'SCARA Path Planner',
    description:
      'My bachelor thesis at the Indira Gandhi Centre for Atomic Research.\nI developed a full path planner that builds a visibility graph around known obstacles and searches it with A* for the shortest collision-free path for a SCARA arm, and validated it on a real 1:1 test rig.\nBenchmarked against Dijkstra, it found the same optimal paths in about half the compute time.',
    tech: ['Codesys (ST / CFC / LD)', 'Visibility Graph', 'A*', 'Path Planning'],
    status: ['completed', 'final-year bachelor thesis'],
    note: 'Simulation shown; hardware footage available on request.',
    media: [
      {
        type: 'video',
        src: '/projects/scara/planner.mp4',
        poster: '/projects/scara/planner-poster.jpg',
        alt: 'Simulation of the planner: a visibility graph is built around obstacles in a 2-DOF SCARA workspace, A* finds the shortest collision-free path, and the arm follows it',
        label: 'simulation',
      },
      {
        type: 'image',
        src: '/projects/scara/astar-vs-dijkstra.jpg',
        alt: 'Compute time vs obstacle count: A* takes 457 ms vs 878.9 ms for Dijkstra at 10 obstacles, with identical path lengths',
      },
    ],
  },
  {
    title: 'Agrirover: Tomato-Harvesting Mobile Manipulator',
    description:
      'A ROS 2 mobile robot with an arm that finds ripe tomatoes with a camera and picks them.',
    tech: ['ROS 2', 'YOLOv8', 'Jetson Orin Nano', 'RealSense D435', 'Arduino'],
    status: ['completed', 'final-year project I'],
    repo: 'https://github.com/ppranav04/agrirover',
    media: [
      {
        type: 'video',
        src: '/projects/agrirover/demo.mp4',
        poster: '/projects/agrirover/demo-poster.jpg',
        alt: 'Agrirover detecting a tomato and moving the arm to pick it',
      },
      {
        type: 'image',
        src: '/projects/agrirover/arm.jpg',
        alt: 'The 5-DOF Agrirover arm with RealSense camera and TPU gripper',
        position: '50% 30%',
      },
      {
        type: 'image',
        src: '/projects/agrirover/detection.jpg',
        alt: 'Live YOLOv8 tomato detection window at 28 FPS',
      },
    ],
  },
  {
    title: 'Biomimetic Hand',
    description:
      'A 3D-printed humanoid hand that copies your finger movements from the muscle signals in your forearm. I developed the signal processing that turns muscle activity into gestures.',
    tech: ['C++', 'Arduino', 'EMG', 'InMoov'],
    status: ['completed', 'mini project'],
    repo: 'https://github.com/ppranav04/biomimetic_hand',
    media: [
      {
        type: 'image',
        src: '/projects/biomimetic-hand/hand.jpg',
        alt: 'InMoov hand wired to an Arduino, mirroring an open human hand via EMG electrodes',
      },
    ],
  },
  {
    title: 'RealSense Room SLAM',
    description:
      'A 3D map of a room built with an Intel RealSense depth camera and RTAB-Map on ROS 2.',
    tech: ['ROS 2', 'RTAB-Map', 'RealSense D435', 'RViz2'],
    status: ['completed', 'mini project'],
    repo: 'https://github.com/ppranav04/realsense-d435-room-slam',
    media: [
      {
        type: 'image',
        src: '/projects/room-slam/pointcloud.jpg',
        alt: 'RTAB-Map 3D point cloud of a room with the camera trajectory in RViz2',
        position: '55% 50%',
      },
      {
        type: 'image',
        src: '/projects/room-slam/trajectory.jpg',
        alt: 'Another view of the room point-cloud map',
        position: '55% 50%',
      },
    ],
  },
];

export type Entry = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Entry[] = [
  {
    title: 'Bachelor Thesis Intern',
    org: 'Indira Gandhi Centre for Atomic Research (IGCAR), Kalpakkam',
    period: 'Jan 2026 — Apr 2026',
    points: [
      'Implemented a visibility graph + A* path planner for a 2-DOF SCARA manipulator, running natively on the PLC motion controller and validated in real time on a 1:1 hardware test rig.',
      "Benchmarked A* against Dijkstra across 1–10 obstacles: identical optimal path lengths, with A*'s compute-time advantage growing to 48% at 10 obstacles.",
    ],
  },
  {
    title: 'IoT Engineer Intern',
    org: 'Zoho Corporation, Chennai',
    period: 'Sep 2024 — Feb 2025',
    points: [
      'Built an ESP32 air-quality monitor in embedded C++ reading 3 gas sensors, converting raw ADC readings to ppm through power-law calibration curves derived from the datasheets.',
      'Delivered a working prototype at ₹10k per unit against ₹20k–40k for commercial monitors, with OTA updates and alerts through Zoho Cliq and Mail.',
    ],
  },
  {
    title: 'Intern Trainee',
    org: 'Indira Gandhi Centre for Atomic Research (IGCAR), Kalpakkam',
    period: 'Jun 2024 — Jul 2024',
    points: [
      'Developed a Python simulation of damped-least-squares inverse kinematics for a 2-DOF SCARA, with speed-based time interpolation to cap joint velocities and remove step changes that would trip the motors.',
      'Built an obstacle-avoidance planner with an interactive Pygame simulator, later extended into the multi-obstacle thesis planner.',
    ],
  },
];

export const education: Entry[] = [
  {
    title: 'B.Tech. in Mechatronics and Automation',
    org: 'VIT Chennai',
    period: '2022 — 2026',
    points: [
      'Coursework: Machine Vision, Artificial Intelligence, Control Systems, Industrial Robotics, Probability and Statistics, Linear Algebra, Differential Equations, C++, Python.',
    ],
  },
];
