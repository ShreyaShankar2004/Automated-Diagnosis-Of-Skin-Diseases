
  function showAuthModal() {
    document.getElementById('auth-modal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    switchToLogin(); // Default to login view
  }

  function hideAuthModal() {
    document.getElementById('auth-modal').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  function switchToSignup() {
    const login = document.getElementById('login-form');
    const signup = document.getElementById('signup-form');

    login.classList.add('opacity-0');
    setTimeout(() => {
      login.classList.add('hidden');
      signup.classList.remove('hidden');
      signup.classList.remove('opacity-0');
    }, 500);
  }

  function switchToLogin() {
    const login = document.getElementById('login-form');
    const signup = document.getElementById('signup-form');

    signup.classList.add('opacity-0');
    setTimeout(() => {
      signup.classList.add('hidden');
      login.classList.remove('hidden');
      login.classList.remove('opacity-0');
    }, 500);
  }

  function handleLogin() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    alert("Signup successful! Redirecting to home page...");
    setTimeout(() => {
    window.location.href = "skin.html"; 
  }, 1000);
    hideAuthModal();
  }

  function handleSignup() {
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    alert("Login successful! Redirecting to home page...");
  setTimeout(() => {
    window.location.href = "skin.html"; 
  }, 1000);
}


        // Page Navigation
        function showPage(pageId) {
            document.querySelectorAll('#app > section').forEach(section => {
                section.classList.add('hidden');
            });
            document.querySelector(`#${pageId}-page`).classList.remove('hidden');
            
            // Update URL hash
            window.location.hash = pageId;
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
        
        // Handle hash changes
        window.addEventListener('hashchange', function() {
            const pageId = window.location.hash.substring(1);
            if (pageId && document.querySelector(`#${pageId}-page`)) {
                showPage(pageId);
            }
        });
        
        // Initial page load
        document.addEventListener('DOMContentLoaded', function() {
            if (window.location.hash) {
                const pageId = window.location.hash.substring(1);
                if (pageId && document.querySelector(`#${pageId}-page`)) {
                    showPage(pageId);
                }
            }
        });
        
        // Upload Modal Functions
        function showUploadModal() {
            document.getElementById('upload-modal').classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        }
        
        function hideUploadModal() {
            document.getElementById('upload-modal').classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }
        
        function previewImage(event) {
            const input = event.target;
            const uploadArea = document.getElementById('upload-area');
            const previewContainer = document.getElementById('preview-container');
            const imagePreview = document.getElementById('image-preview');
            const fileInfo = document.getElementById('file-info');
            const analyzeBtn = document.getElementById('analyze-btn');
            
            if (input.files && input.files[0]) {
                const file = input.files[0];
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    imagePreview.src = e.target.result;
                    uploadArea.classList.add('hidden');
                    previewContainer.classList.remove('hidden');
                    fileInfo.textContent = `${file.name} (${(file.size / (1024*1024)).toFixed(2)} MB)`;
                    analyzeBtn.classList.remove('hidden');
                    analyzeBtn.disabled = false;
                }
                
                reader.readAsDataURL(file);
            }
        }
        
        function clearPreview() {
            document.getElementById('file-upload').value = '';
            document.getElementById('upload-area').classList.remove('hidden');
            document.getElementById('preview-container').classList.add('hidden');
            document.getElementById('analyze-btn').classList.add('hidden');
            document.getElementById('analyze-btn').disabled = true;
        }
        
        function analyzeImage() {
            hideUploadModal();
            showLoadingIndicator();
            
            // Simulate analysis with timeout
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += 1;
                document.getElementById('progress-bar').style.width = `${progress}%`;
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => {
                        hideLoadingIndicator();
                        showResults();
                    }, 500);
                }
            }, 30);
        }
        
        function showLoadingIndicator() {
            document.getElementById('loading-indicator').classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        }
        
        function hideLoadingIndicator() {
            document.getElementById('loading-indicator').classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }
        
        function showResults() {
            document.getElementById('app').querySelectorAll('section').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById('results-page').classList.remove('hidden');
            window.scrollTo(0, 0);
        }
        
        function closeResults() {
            document.getElementById('results-page').classList.add('hidden');
            document.getElementById('home-page').classList.remove('hidden');
            window.scrollTo(0, 0);
        }
        
        function printResults() {
            window.print();
        }
        
        // FAQ Toggle
        function toggleFAQ(index) {
            const answer = document.getElementById(`faq-${index}-answer`);
            const arrow = document.getElementById(`faq-${index}-arrow`);
            
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                arrow.innerHTML = '<i class="fas fa-chevron-up"></i>';
            } else {
                answer.classList.add('hidden');
                arrow.innerHTML = '<i class="fas fa-chevron-down"></i>';
            }
        }
        
        // Set current date for results
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('analysis-date').textContent = now.toLocaleDateString('en-US', options);
        
        // Connect analyze button
        document.getElementById('analyze-btn').addEventListener('click', analyzeImage);
        function validateAndSend(event) {
            event.preventDefault(); // prevent default form submission
        
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
        
            if (name === '' || email === '' || subject === '' || message === '') {
              alert('Please fill out all fields before submitting.');
              return false;
            }
        
            alert('Message sent successfully!');
            event.target.reset(); // Clear the form if needed
            return true;
          }
          
          document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function () {
              // Remove text-gray-300 and re-add text-white to all links
              document.querySelectorAll('.nav-link').forEach(el => {
                el.classList.remove('text-gray-300');
                el.classList.add('text-white');
              });
          
              // Remove text-white and add text-gray-300 to the clicked one
              this.classList.remove('text-white');
              this.classList.add('text-gray-300');
            });
          });
          
          function openModal() {
            document.getElementById("dermatologist-modal").classList.remove("hidden");
            document.getElementById("dermatologist-modal").classList.add("flex");
          }
        
          function closeModal() {
            document.getElementById("dermatologist-modal").classList.remove("flex");
            document.getElementById("dermatologist-modal").classList.add("hidden");
          }
        
          function searchDermatologists() {
            const input = document.getElementById("locationInput").value.trim();
            const container = document.getElementById("resultsContainer");
            container.innerHTML = ""; // Clear previous
        
            if (input === "") {
              container.innerHTML = "<p class='text-red-500'>Please enter a location.</p>";
              return;
            }
        
            const sampleResults = [
              { name: "Dr. Asha Mehta", location: input, contact: "9876543210" },
              { name: "Dr. Ramesh Kulkarni", location: input, contact: "9765432109" },
              { name: "Dr. Priya Rao", location: input, contact: "9123456780" }
            ];
        
            sampleResults.forEach(doc => {
              const div = document.createElement("div");
              div.classList.add("bg-gray-100", "p-3", "rounded", "shadow-sm");
              div.innerHTML = `<strong>${doc.name}</strong><br>Location: ${doc.location}<br>Contact: ${doc.contact}`;
              container.appendChild(div);
            });
          }