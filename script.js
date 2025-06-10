const quests = [
            {
                id: 1,
                title: "🔍 Array Explorer",
                level: "Beginner",
                method: "forEach",
                description: "Gunakan forEach untuk menampilkan setiap nama heroes dengan format 'Hero: [nama]'",
                data: `const heroes = ['Superman', 'Batman', 'Wonder Woman', 'Flash'];`,
                expectedOutput: "Hero: Superman\nHero: Batman\nHero: Wonder Woman\nHero: Flash",
                hint: "Gunakan forEach dengan callback function yang menerima parameter item. Di dalam function, gunakan console.log untuk menampilkan 'Hero: ' + item",
                solution: `heroes.forEach(hero => console.log('Hero: ' + hero));`,
                validator: (code, output) => {
                    const hasForEach = code.includes('forEach');
                    const correctOutput = output.trim() === "Hero: Superman\nHero: Batman\nHero: Wonder Woman\nHero: Flash";
                    return { isCorrect: hasForEach && correctOutput, hasMethod: hasForEach };
                },
                score: 50
            },
            {
                id: 2,
                title: "🎯 Power Transformer",
                level: "Beginner", 
                method: "map",
                description: "Ubah array angka menjadi array yang berisi kuadrat dari setiap angka menggunakan map. Simpan hasil dalam variabel 'squares' dan tampilkan dengan console.log",
                data: `const numbers = [2, 4, 6, 8, 10];`,
                expectedOutput: "[4,16,36,64,100]",
                hint: "Map akan mengembalikan array baru. Gunakan: const squares = numbers.map(num => num * num); lalu console.log(squares);",
                solution: `const squares = numbers.map(num => num * num);\nconsole.log(squares);`,
                validator: (code, output) => {
                    const hasMap = code.includes('map');
                    const hasSquares = code.includes('squares');
                    const correctOutput = output.trim() === "[4,16,36,64,100]" || output.trim() === "4,16,36,64,100";
                    return { isCorrect: hasMap && correctOutput, hasMethod: hasMap };
                },
                score: 75
            },
            {
                id: 3,
                title: "⚔️ Hero Filter",
                level: "Beginner",
                method: "filter",
                description: "Filter heroes yang mengandung huruf 'a' (case insensitive). Simpan dalam variabel 'filteredHeroes' dan tampilkan",
                data: `const heroes = ['Superman', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman'];`,
                expectedOutput: "Batman,Wonder Woman,Flash,Aquaman",
                hint: "Gunakan filter dengan kondisi item.toLowerCase().includes('a'). Jangan lupa console.log hasil filter",
                solution: `const filteredHeroes = heroes.filter(hero => hero.toLowerCase().includes('a'));\nconsole.log(filteredHeroes);`,
                validator: (code, output) => {
                    const hasFilter = code.includes('filter');
                    const cleanOutput = output.replace(/[\[\]"'\s]/g, '');
                    const expectedClean = "Batman,WonderWoman,Flash,Aquaman";
                    return { isCorrect: hasFilter && cleanOutput === expectedClean, hasMethod: hasFilter };
                },
                score: 75
            },
            {
                id: 4,
                title: "🏆 Score Calculator",
                level: "Intermediate",
                method: "reduce",
                description: "Hitung total score dari semua players menggunakan reduce. Simpan dalam variabel 'totalScore' dan tampilkan",
                data: `const players = [
    {name: 'Player1', score: 150},
    {name: 'Player2', score: 230},
    {name: 'Player3', score: 180},
    {name: 'Player4', score: 90}
];`,
                expectedOutput: "650",
                hint: "Reduce membutuhkan callback dengan parameter (accumulator, current) dan nilai awal 0. Akumulasi current.score",
                solution: `const totalScore = players.reduce((total, player) => total + player.score, 0);\nconsole.log(totalScore);`,
                validator: (code, output) => {
                    const hasReduce = code.includes('reduce');
                    const correctOutput = output.trim() === "650";
                    return { isCorrect: hasReduce && correctOutput, hasMethod: hasReduce };
                },
                score: 100
            },
            {
                id: 5,
                title: "🎪 Multi-Method Master",
                level: "Intermediate", 
                method: "chaining",
                description: "Chain methods: 1) Filter produk dengan harga > 50, 2) Ambil nama produk saja, 3) Gabung dengan koma. Simpan dalam 'result' dan tampilkan",
                data: `const products = [
    {name: 'Laptop', price: 1000},
    {name: 'Mouse', price: 25},
    {name: 'Keyboard', price: 75},
    {name: 'Monitor', price: 300},
    {name: 'Cable', price: 10}
];`,
                expectedOutput: "Laptop,Keyboard,Monitor",
                hint: "Chain methods: products.filter(p => p.price > 50).map(p => p.name).join(',')",
                solution: `const result = products.filter(p => p.price > 50).map(p => p.name).join(',');\nconsole.log(result);`,
                validator: (code, output) => {
                    const hasFilter = code.includes('filter');
                    const hasMap = code.includes('map');
                    const hasJoin = code.includes('join');
                    const correctOutput = output.trim() === "Laptop,Keyboard,Monitor";
                    return { 
                        isCorrect: hasFilter && hasMap && hasJoin && correctOutput, 
                        hasMethod: hasFilter && hasMap && hasJoin 
                    };
                },
                score: 150
            },
            {
                id: 6,
                title: "🔮 Array Detective",
                level: "Intermediate",
                method: "find/some",
                description: "1) Cari student dengan grade 'A' menggunakan find, 2) Cek apakah ada student dengan grade 'F' menggunakan some. Format output: 'Found: [nama], Has F grade: [true/false]'",
                data: `const students = [
    {name: 'Alice', grade: 'B'},
    {name: 'Bob', grade: 'A'},
    {name: 'Charlie', grade: 'C'},
    {name: 'Diana', grade: 'A'}
];`,
                expectedOutput: "Found: Bob, Has F grade: false",
                hint: "find() untuk mencari student dengan grade === 'A', some() untuk mengecek apakah ada grade === 'F'",
                solution: `const topStudent = students.find(s => s.grade === 'A');\nconst hasFailingGrade = students.some(s => s.grade === 'F');\nconsole.log('Found: ' + topStudent.name + ', Has F grade: ' + hasFailingGrade);`,
                validator: (code, output) => {
                    const hasFind = code.includes('find');
                    const hasSome = code.includes('some');
                    const correctOutput = output.trim() === "Found: Bob, Has F grade: false";
                    return { isCorrect: hasFind && hasSome && correctOutput, hasMethod: hasFind && hasSome };
                },
                score: 125
            },
            {
                id: 7,
                title: "🏅 Champion Sorter",
                level: "Advanced",
                method: "sort",
                description: "Sort athletes berdasarkan: 1) Score tertinggi dulu, 2) Jika score sama, urutkan nama A-Z. Tampilkan array yang sudah di-sort",
                data: `const athletes = [
    {name: 'John', score: 95},
    {name: 'Alice', score: 87},
    {name: 'Bob', score: 95},
    {name: 'Carol', score: 92}
];`,
                expectedOutput: "Bob,John,Carol,Alice",
                hint: "sort dengan callback (a, b). Jika score berbeda return b.score - a.score, jika sama return a.name.localeCompare(b.name)",
                solution: `athletes.sort((a, b) => {\n    if (a.score !== b.score) return b.score - a.score;\n    return a.name.localeCompare(b.name);\n});\nconsole.log(athletes.map(a => a.name));`,
                validator: (code, output) => {
                    const hasSort = code.includes('sort');
                    const cleanOutput = output.replace(/[\[\]"'\s]/g, '');
                    const correctOutput = cleanOutput === "Bob,John,Carol,Alice";
                    return { isCorrect: hasSort && correctOutput, hasMethod: hasSort };
                },
                score: 175
            },
            {
                id: 8,
                title: "🌟 Inventory Master",
                level: "Advanced",
                method: "advanced",
                description: "Complex task: 1) Group by category, 2) Calculate total value per category (value × quantity), 3) Sort by total value descending, 4) Format: 'category: total'",
                data: `const inventory = [
    {name: 'Sword', category: 'weapon', value: 100, quantity: 2},
    {name: 'Shield', category: 'armor', value: 80, quantity: 1},
    {name: 'Potion', category: 'consumable', value: 10, quantity: 5},
    {name: 'Bow', category: 'weapon', value: 60, quantity: 3},
    {name: 'Helmet', category: 'armor', value: 40, quantity: 2}
];`,
                expectedOutput: "weapon: 380, armor: 160, consumable: 50",
                hint: "Gunakan reduce untuk grouping dan Object.entries untuk sorting. Kalkulasi: value * quantity",
                solution: `const grouped = inventory.reduce((acc, item) => {\n    const category = item.category;\n    const totalValue = item.value * item.quantity;\n    acc[category] = (acc[category] || 0) + totalValue;\n    return acc;\n}, {});\n\nconst result = Object.entries(grouped)\n    .sort(([,a], [,b]) => b - a)\n    .map(([cat, val]) => cat + ': ' + val)\n    .join(', ');\n\nconsole.log(result);`,
                validator: (code, output) => {
                    const hasReduce = code.includes('reduce');
                    const hasSort = code.includes('sort');
                    const hasEntries = code.includes('Object.entries') || code.includes('entries');
                    const correctValues = output.includes('380') && output.includes('200') && output.includes('50');
                    const correctOrder = output.indexOf('380') < output.indexOf('200') && output.indexOf('200') < output.indexOf('50');
                    return { 
                        isCorrect: hasReduce && correctValues && correctOrder, 
                        hasMethod: hasReduce && hasSort 
                    };
                },
                score: 200
            }
        ];

        // Enhanced Game State
        let completedQuests = new Set();
        let totalScore = 0;
        let userAnswers = {};
        let currentFilter = 'all';

        // Initialize Game
        function initGame() {
            renderQuests();
            updateStats();
        }

        function renderQuests() {
            const container = document.getElementById('quest-container');
            container.innerHTML = '';

            const filteredQuests = currentFilter === 'all' 
                ? quests 
                : quests.filter(quest => quest.level === currentFilter);

            filteredQuests.forEach(quest => {
                const questCard = createQuestCard(quest);
                container.appendChild(questCard);
            });
        }

        function createQuestCard(quest) {
            const card = document.createElement('div');
            card.className = `quest-card ${completedQuests.has(quest.id) ? 'completed' : ''}`;
            card.id = `quest-${quest.id}`;

            const completedBadge = completedQuests.has(quest.id) ? '✅ ' : '';

            card.innerHTML = `
                <div class="quest-header">
                    <div>
                        <div class="quest-title">${completedBadge}${quest.title}</div>
                        <span class="quest-level">${quest.level} - ${quest.method} (+${quest.score} XP)</span>
                    </div>
                </div>
                <div class="quest-description">${quest.description}</div>
                <div class="code-example">${quest.data}</div>
                <textarea class="quest-input" id="input-${quest.id}" placeholder="Tulis kode JavaScript Anda di sini...
Contoh:
const result = array.method(...);
console.log(result);">${userAnswers[quest.id] || ''}</textarea>
                <div class="quest-buttons">
                    <button class="quest-button" onclick="checkAnswer(${quest.id})">🚀 Submit Quest</button>
                    <button class="quest-button hint" onclick="toggleHint(${quest.id})">💡 Show Hint</button>
                    <button class="quest-button solution" onclick="toggleSolution(${quest.id})">🔑 Show Solution</button>
                    <button class="quest-button reset" onclick="resetQuest(${quest.id})">🔄 Reset</button>
                </div>
                <div class="hint" id="hint-${quest.id}">
                    <strong>💡 Hint:</strong><br>${quest.hint}
                </div>
                <div class="solution-display" id="solution-${quest.id}">
                    <strong>🔑 Solution:</strong><br>
                    <pre>${quest.solution}</pre>
                </div>
                <div class="result" id="result-${quest.id}"></div>
            `;

            return card;
        }

        function checkAnswer(questId) {
            const quest = quests.find(q => q.id === questId);
            const userCode = document.getElementById(`input-${questId}`).value.trim();
            const resultDiv = document.getElementById(`result-${questId}`);

            if (!userCode) {
                resultDiv.innerHTML = '❌ Please enter your code!';
                resultDiv.className = 'result error';
                return;
            }

            // Save user's answer
            userAnswers[questId] = userCode;

            try {
                // Create isolated execution context
                let output = '';
                let consoleOutputs = [];
                
                // Create safe console.log override
                const originalLog = console.log;
                console.log = (...args) => {
                    const logString = args.map(arg => {
                        if (typeof arg === 'object') {
                            if (Array.isArray(arg)) {
                                return JSON.stringify(arg).replace(/"/g, '');
                            }
                            return JSON.stringify(arg);
                        }
                        return String(arg);
                    }).join(' ');
                    consoleOutputs.push(logString);
                    output += logString + '\n';
                };

                // Execute the quest data and user code in try-catch
                const fullCode = quest.data + '\n' + userCode;
                eval(fullCode);

                // Restore original console.log
                console.log = originalLog;

                // Clean output
                const cleanOutput = output.trim();
                
                // Enhanced validation using quest's validator function
                const validationResult = quest.validator(userCode, cleanOutput);
                
                if (validationResult.isCorrect) {
                    resultDiv.innerHTML = `✅ <strong>Perfect!</strong> Quest completed successfully!
                    
<strong>Expected:</strong> ${quest.expectedOutput}
<strong>Your output:</strong> ${cleanOutput}
<strong>Score:</strong> +${quest.score} XP`;
                    resultDiv.className = 'result success';
                    
                    if (!completedQuests.has(questId)) {
                        completeQuest(quest);
                    }
                } else if (validationResult.hasMethod) {
                    resultDiv.innerHTML = `⚠️ <strong>Almost there!</strong> You're using the right method but the output isn't quite correct.
                    
<strong>Expected:</strong> ${quest.expectedOutput}
<strong>Your output:</strong> ${cleanOutput}

Check your logic and try again!`;
                    resultDiv.className = 'result partial';
                } else {
                    resultDiv.innerHTML = `❌ <strong>Not quite right!</strong> Make sure you're using the correct array method.
                    
<strong>Expected:</strong> ${quest.expectedOutput}
<strong>Your output:</strong> ${cleanOutput}
<strong>Required method:</strong> ${quest.method}

💡 Try using the hint if you're stuck!`;
                    resultDiv.className = 'result error';
                }

            } catch (error) {
                resultDiv.innerHTML = `💥 <strong>Code Error:</strong> 
${error.message}

<strong>Common issues:</strong>
• Check for syntax errors (missing brackets, semicolons)
• Make sure variable names are spelled correctly
• Ensure you're calling console.log to display results`;
                resultDiv.className = 'result error';
            }
        }

        function completeQuest(quest) {
            completedQuests.add(quest.id);
            totalScore += quest.score;

            // Update quest card appearance
            const questCard = document.getElementById(`quest-${quest.id}`);
            questCard.classList.add('completed');
            
            // Update title with checkmark
            const titleElement = questCard.querySelector('.quest-title');
            if (!titleElement.textContent.startsWith('✅')) {
                titleElement.textContent = '✅ ' + titleElement.textContent;
            }

            // Show achievement notification
            showAchievement(`🎉 "${quest.title}" completed! +${quest.score} XP`);

            updateStats();
            
            // Check for level up
            checkLevelUp();
        }

        function checkLevelUp() {
            const currentLevel = getCurrentLevel();
            const levelElement = document.getElementById('current-level');
            
            if (levelElement.textContent !== currentLevel) {
                setTimeout(() => {
                    showAchievement(`🌟 Level Up! You are now an ${currentLevel}!`);
                }, 1000);
            }
        }

        function getCurrentLevel() {
            if (totalScore >= 1000) return 'Array Master';
            if (totalScore >= 700) return 'Array Expert';
            if (totalScore >= 400) return 'Array Warrior';
            if (totalScore >= 200) return 'Array Apprentice';
            return 'Novice';
        }

        function toggleHint(questId) {
            const hintDiv = document.getElementById(`hint-${questId}`);
            const isVisible = hintDiv.style.display === 'block';
            hintDiv.style.display = isVisible ? 'none' : 'block';
        }

        function toggleSolution(questId) {
            const solutionDiv = document.getElementById(`solution-${questId}`);
            const isVisible = solutionDiv.style.display === 'block';
            solutionDiv.style.display = isVisible ? 'none' : 'block';
        }

        function resetQuest(questId) {
            const inputElement = document.getElementById(`input-${questId}`);
            const resultDiv = document.getElementById(`result-${questId}`);
            const hintDiv = document.getElementById(`hint-${questId}`);
            const solutionDiv = document.getElementById(`solution-${questId}`);
            
            inputElement.value = '';
            resultDiv.innerHTML = '';
            resultDiv.className = 'result';
            hintDiv.style.display = 'none';
            solutionDiv.style.display = 'none';
            
            delete userAnswers[questId];
        }

        function updateStats() {
            document.getElementById('completed-quests').textContent = completedQuests.size;
            document.getElementById('total-score').textContent = totalScore;
            
            const progress = (completedQuests.size / quests.length) * 100;
            const progressFill = document.getElementById('progress-fill');
            const progressText = document.getElementById('progress-text');
            
            progressFill.style.width = progress + '%';
            progressText.textContent = Math.round(progress) + '%';

            // Update level with animation
            const currentLevel = getCurrentLevel();
            const levelElement = document.getElementById('current-level');
            
            if (levelElement.textContent !== currentLevel) {
                levelElement.style.transform = 'scale(1.2)';
                levelElement.style.color = '#4CAF50';
                setTimeout(() => {
                    levelElement.textContent = currentLevel;
                    levelElement.style.transform = 'scale(1)';
                    levelElement.style.color = '#667eea';
                }, 300);
            }
        }

        function showAchievement(message) {
            const achievement = document.getElementById('achievement');
            achievement.innerHTML = message;
            achievement.classList.add('show');

            setTimeout(() => {
                achievement.classList.remove('show');
            }, 4000);
        }

        function filterQuests(difficulty) {
            currentFilter = difficulty;
            
            // Update active filter button
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            renderQuests();
        }

        // Enhanced Features

        // Auto-save functionality
        function autoSave() {
            const gameState = {
                completedQuests: Array.from(completedQuests),
                totalScore: totalScore,
                userAnswers: userAnswers
            };
            // Note: localStorage not available in Claude artifacts
            // localStorage.setItem('arrayQuestProgress', JSON.stringify(gameState));
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'Enter':
                        e.preventDefault();
                        const activeElement = document.activeElement;
                        if (activeElement && activeElement.classList.contains('quest-input')) {
                            const questId = activeElement.id.replace('input-', '');
                            checkAnswer(parseInt(questId));
                        }
                        break;
                }
            }
        });

        // Add tooltips and better UX
        function addTooltips() {
            const buttons = document.querySelectorAll('.quest-button');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    if (this.textContent.includes('Submit')) {
                        this.title = 'Ctrl+Enter to submit quickly';
                    } else if (this.textContent.includes('Hint')) {
                        this.title = 'Get a helpful hint for this quest';
                    } else if (this.textContent.includes('Solution')) {
                        this.title = 'View the complete solution';
                    } else if (this.textContent.includes('Reset')) {
                        this.title = 'Clear your code and start over';
                    }
                });
            });
        }

        // Code syntax highlighting (basic)
        function highlightSyntax() {
            const textareas = document.querySelectorAll('.quest-input');
            textareas.forEach(textarea => {
                textarea.addEventListener('input', function() {
                    // Basic validation
                    const code = this.value;
                    const hasConsoleLog = code.includes('console.log');
                    
                    if (code.length > 10 && !hasConsoleLog) {
                        this.style.borderColor = '#ffa726';
                        this.title = 'Don\'t forget to use console.log to display your results!';
                    } else {
                        this.style.borderColor = '#e2e8f0';
                        this.title = '';
                    }
                });
            });
        }

        // Initialize enhanced features
        function initEnhancedFeatures() {
            addTooltips();
            highlightSyntax();
            
            // Auto-save every 30 seconds
            setInterval(autoSave, 30000);
        }

        // Initialize the game when page loads
        document.addEventListener('DOMContentLoaded', function() {
            initGame();
            initEnhancedFeatures();
            
            // Show welcome message
            setTimeout(() => {
                showAchievement('🚀 Welcome to Array Methods Adventure! Start with the first quest to begin your journey.');
            }, 1000);
        });

        // Initialize immediately for artifact environment
        initGame();
        initEnhancedFeatures();
    