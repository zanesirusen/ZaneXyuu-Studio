export default function TutorialsPage() {
  return (
    <div className="space-y-8 animate-page-content">
      <header className="rounded-[1.25rem] border border-slate-800/90 bg-slate-950/95 p-8">
        <h2 className="text-2xl font-semibold text-white">Tutorial & Contoh Luau — Panduan Lengkap</h2>
        <p className="mt-3 text-slate-400">Panduan praktis dengan code snippets dan penjelasan detail untuk semua level pemula hingga menengah Roblox Studio.</p>
      </header>

      {/* BASICS SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-blue-300 mb-4">0. Dasar-Dasar Luau — Apa itu Script?</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">BASIC SCRIPT (Print & Variables)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`-- Ini adalah comment, tidak dieksekusi
-- Gunakan print() untuk debug/see output

print("Hello Roblox!")  -- Output: Hello Roblox!

-- Variables: menyimpan data
local playerName = "Zane"
local health = 100
local isAlive = true

print("Player: " .. playerName)  -- Concatenate strings dengan ..
print("Health: " .. health)

-- Types: string, number, boolean, table, function
local message = "This is a string"
local count = 42
local flag = false
local items = {"sword", "shield", "potion"}  -- Table (array)

-- Conditional: if/elseif/else
if health > 50 then
  print("Health is good!")
elseif health > 0 then
  print("Health is low!")
else
  print("Player is dead!")
end

-- Loop: for
for i = 1, 5 do
  print("Number: " .. i)  -- Output: Number: 1, 2, 3, 4, 5
end

-- Loop: while
local x = 0
while x < 3 do
  print("x is " .. x)
  x = x + 1
end`}
            </pre>
          </div>
          <p className="text-slate-300 text-sm">
            <strong>Penjelasan:</strong> Script adalah file code yang Roblox jalankan. Setiap instruction dieksekusi baris per baris. Variables menyimpan data, conditionals membuat keputusan, loops mengulangi code.
          </p>
        </div>
      </section>

      {/* Client-Server Communication */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-cyan-300 mb-4">1. Client-Server Communication (RemoteEvent)</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">SERVER SCRIPT (ServerScriptService)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`local ReplicatedStorage = game:GetService("ReplicatedStorage")
local PlayerDamaged = ReplicatedStorage:WaitForChild("PlayerDamaged")

PlayerDamaged.OnServerEvent:Connect(function(player, damage)
  if damage > 0 and damage <= 100 then
    print(player.Name .. " took " .. damage .. " damage")
    -- Apply damage logic on server (secure)
  end
end)`}
            </pre>
          </div>
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">CLIENT SCRIPT (StarterPlayer.StarterCharacterScripts)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`local ReplicatedStorage = game:GetService("ReplicatedStorage")
local PlayerDamaged = ReplicatedStorage:WaitForChild("PlayerDamaged")
local player = game.Players.LocalPlayer

-- Send damage event to server
PlayerDamaged:FireServer(25)  -- Secure: server validates`}
            </pre>
          </div>
        </div>
      </section>

      {/* DataStore Save/Load */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-emerald-300 mb-4">2. DataStore Save & Load (Persistent Data)</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">SERVER SCRIPT (ServerScriptService)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`local DataStoreService = game:GetService("DataStoreService")
local playerDataStore = DataStoreService:GetDataStore("PlayerData")

local function savePlayerData(player, data)
  local success, err = pcall(function()
    playerDataStore:SetAsync(player.UserId, data)
  end)
  if not success then
    warn("Error saving data for " .. player.Name .. ": " .. err)
  end
end

local function loadPlayerData(player)
  local success, data = pcall(function()
    return playerDataStore:GetAsync(player.UserId)
  end)
  if success and data then
    return data
  end
  return { coins = 0, level = 1 }  -- Default data
end

game.Players.PlayerAdded:Connect(function(player)
  local data = loadPlayerData(player)
  print("Loaded data for " .. player.Name .. ": ", data)
end)

game.Players.PlayerRemoving:Connect(function(player)
  local data = { coins = 100, level = 5 }  -- Example save
  savePlayerData(player, data)
end)`}
            </pre>
          </div>
        </div>
      </section>

      {/* ModuleScript Reuse */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-yellow-300 mb-4">3. ModuleScript untuk Code Reuse</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">MODULE SCRIPT (ReplicatedStorage/Damage)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`local Damage = {}

function Damage.calculateDamage(baseAttack, defense)
  local reduction = defense * 0.1
  return math.max(baseAttack - reduction, 1)
end

function Damage.applyStatusEffect(humanoid, effectName, duration)
  if effectName == "burn" then
    local damagePerSecond = 2
    for i = 0, duration do
      humanoid:TakeDamage(damagePerSecond)
      wait(1)
    end
  end
end

return Damage`}
            </pre>
          </div>
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">MENGGUNAKAN MODULE (Script biasa)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`local Damage = require(game.ReplicatedStorage:WaitForChild("Damage"))
local humanoid = script.Parent:WaitForChild("Humanoid")

local finalDamage = Damage.calculateDamage(50, 10)
humanoid:TakeDamage(finalDamage)

Damage.applyStatusEffect(humanoid, "burn", 5)`}
            </pre>
          </div>
        </div>
      </section>

      {/* Coroutines for Async Work */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-violet-300 mb-4">4. Coroutines untuk Pekerjaan Asinkron</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">SERVER SCRIPT</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`local function heavyComputation()
  local result = 0
  for i = 1, 1000000 do
    result = result + i
  end
  return result
end

-- Tanpa coroutine: akan freeze game
-- Dengan coroutine: berjalan di background
local co = coroutine.create(function()
  local result = heavyComputation()
  print("Computation done: " .. result)
end)

coroutine.resume(co)`}
            </pre>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-[1rem] border border-cyan-500/30 bg-cyan-500/10 p-6">
        <h3 className="text-lg font-semibold text-cyan-300 mb-3">📥 Download Resources</h3>
        <p className="text-slate-300 mb-5">Akses library dan template siap pakai untuk mempercepat development.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/free-asset"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
          >
            📦 Download RBXM Assets
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            💬 Join Discord Community
          </a>
        </div>
      </section>

      {/* Tips */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">💡 Tips Pengembangan</h3>
        <ul className="space-y-2 text-slate-300">
          <li>✓ Selalu validasi input di server, jangan percaya client.</li>
          <li>✓ Gunakan LocalScripts untuk UI dan gameplay client-side.</li>
          <li>✓ Gunakan ServerScripts untuk logika penting dan persistent data.</li>
          <li>✓ Test dengan join multiplayer untuk memastikan sync client-server.</li>
          <li>✓ Monitor memory usage dengan profiler jika game besar.</li>
        </ul>
      </section>

      {/* EVENTS & CONNECTIONS SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-rose-300 mb-4">5. Events & Connections — Listen untuk Changes</h3>
        <div className="space-y-4">
          <p className="text-slate-300 text-sm">
            Events terjadi saat sesuatu berubah (player join, part touched, button clicked). Kita perlu "listen" dengan :Connect() atau :Wait().
          </p>
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">EVENT LISTENING (SERVER SCRIPT)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`local Players = game:GetService("Players")
local part = workspace:WaitForChild("MyPart")
local humanoid = part.Parent:WaitForChild("Humanoid")

-- Event 1: Player join game
Players.PlayerAdded:Connect(function(player)
  print(player.Name .. " joined!")
end)

-- Event 2: Player leave game
Players.PlayerRemoving:Connect(function(player)
  print(player.Name .. " left the game")
end)

-- Event 3: Part touched something
part.Touched:Connect(function(hit)
  print("Something touched: " .. hit.Name)
end)

-- Event 4: Humanoid died
humanoid.Died:Connect(function()
  print("Character died!")
end)

-- Event 5: Value changed (BindableEvent, NumberValue, etc)
local scoreValue = Instance.new("IntValue")
scoreValue.Value = 0

scoreValue.Changed:Connect(function(newValue)
  print("New score: " .. newValue)
end)

scoreValue.Value = 10  -- Triggers Changed event

-- IMPORTANT: Store connection to disconnect later (avoid memory leak)
local connection = part.Touched:Connect(function(hit)
  print("Touch!")
end)

-- Later, disconnect if not needed anymore
connection:Disconnect()`}
            </pre>
          </div>
          <p className="text-slate-300 text-sm">
            <strong>Penjelasan:</strong> :Connect() listen event dan trigger callback saat event terjadi. Jangan lupa :Disconnect() saat tidak perlu, atau memory leak!
          </p>
        </div>
      </section>

      {/* HUMANOID & COMBAT SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-red-300 mb-4">6. Humanoid & Combat System — Damage & Health</h3>
        <div className="space-y-4">
          <p className="text-slate-300 text-sm">
            Humanoid adalah character object yang handle health, damage, ragdoll. Setiap pemain spawn dengan Humanoid.
          </p>
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">COMBAT SYSTEM (SERVER SCRIPT)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`local Players = game:GetService("Players")

-- Function to deal damage to character
local function damageCharacter(character, damageAmount)
  local humanoid = character:FindFirstChild("Humanoid")
  if humanoid then
    humanoid:TakeDamage(damageAmount)
    print(character.Name .. " took " .. damageAmount .. " damage")
  end
end

-- Function to heal character
local function healCharacter(character, healAmount)
  local humanoid = character:FindFirstChild("Humanoid")
  if humanoid then
    local newHealth = humanoid.Health + healAmount
    humanoid.Health = math.min(newHealth, humanoid.MaxHealth)  -- Cap at max health
    print(character.Name .. " healed " .. healAmount .. " HP")
  end
end

-- Listen to character death
Players.PlayerAdded:Connect(function(player)
  player.CharacterAdded:Connect(function(character)
    local humanoid = character:WaitForChild("Humanoid")
    
    humanoid.Died:Connect(function()
      print(player.Name .. " died!")
      -- Respawn logic atau rewards here
    end)
    
    -- Monitor health changes
    local lastHealth = humanoid.Health
    humanoid.Changed:Connect(function()
      if humanoid.Health < lastHealth then
        print(player.Name .. " took damage! Health now: " .. humanoid.Health)
      end
      lastHealth = humanoid.Health
    end)
  end)
end)

-- Example: Damage all players in area
local function damagePlayersInRadius(position, radius, damage)
  local players = Players:GetPlayers()
  for _, player in ipairs(players) do
    if player.Character then
      local char = player.Character
      local distance = (char:FindFirstChild("HumanoidRootPart").Position - position).Magnitude
      if distance < radius then
        damageCharacter(char, damage)
      end
    end
  end
end`}
            </pre>
          </div>
        </div>
      </section>

      {/* GUI & UI SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-purple-300 mb-4">7. GUI/UI — TextButton, TextLabel, UserInputService</h3>
        <div className="space-y-4">
          <p className="text-slate-300 text-sm">
            GUI adalah user interface yang pemain lihat di screen. TextButton untuk button, TextLabel untuk text display, UserInputService untuk input keyboard/mouse.
          </p>
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">SIMPLE BUTTON UI (LOCAL SCRIPT di StartGui)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`local UserInputService = game:GetService("UserInputService")
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local playerGui = player:WaitForChild("PlayerGui")

-- Create a simple button
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "MyGui"
screenGui.ResetOnSpawn = false
screenGui.Parent = playerGui

local button = Instance.new("TextButton")
button.Name = "ClickButton"
button.Size = UDim2.new(0, 200, 0, 50)
button.Position = UDim2.new(0.5, -100, 0.1, 0)
button.Text = "Click Me!"
button.BackgroundColor3 = Color3.fromRGB(0, 150, 255)
button.TextColor3 = Color3.fromRGB(255, 255, 255)
button.Font = Enum.Font.GothamBold
button.TextSize = 18
button.Parent = screenGui

-- Button click event
button.MouseButton1Click:Connect(function()
  print("Button clicked!")
  button.Text = "Clicked!"
end)

-- Create a label to display text
local label = Instance.new("TextLabel")
label.Name = "HealthLabel"
label.Size = UDim2.new(0, 200, 0, 50)
label.Position = UDim2.new(0.5, -100, 0.25, 0)
label.BackgroundColor3 = Color3.fromRGB(50, 50, 50)
label.TextColor3 = Color3.fromRGB(255, 255, 255)
label.Text = "Health: 100"
label.Parent = screenGui

-- Update label every frame
local humanoid = player.Character:WaitForChild("Humanoid")
game:GetService("RunService").RenderStepped:Connect(function()
  label.Text = "Health: " .. math.floor(humanoid.Health)
end)

-- Keyboard input
UserInputService.InputBegan:Connect(function(input, gameProcessed)
  if gameProcessed then return end
  
  if input.KeyCode == Enum.KeyCode.E then
    print("E key pressed!")
  elseif input.KeyCode == Enum.KeyCode.Space then
    print("Space pressed!")
  end
end)`}
            </pre>
          </div>
        </div>
      </section>

      {/* ANIMATION & TWEENS SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-orange-300 mb-4">8. Animations & Tweens — Smooth Motion</h3>
        <div className="space-y-4">
          <p className="text-slate-300 text-sm">
            Animations make movement smooth. TweenService automatically interpolates values (position, size, color) over time.
          </p>
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">TWEEN ANIMATION (LOCAL SCRIPT)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`local TweenService = game:GetService("TweenService")

local part = workspace:WaitForChild("MyPart")
local button = game.Players.LocalPlayer.PlayerGui:WaitForChild("MyGui").MyButton

-- Create tween info (duration, easing style, repeat count, reverse)
local tweenInfo = TweenInfo.new(
  1,  -- Duration: 1 second
  Enum.EasingStyle.Quad,  -- Easing style: Quad
  Enum.EasingDirection.Out,  -- Easing direction: Out
  0,  -- Repeat count: 0 (no repeat)
  false,  -- Reverse: false
  0  -- Delay: 0
)

-- Move part up
local moveUp = TweenService:Create(
  part,
  tweenInfo,
  {Position = part.Position + Vector3.new(0, 10, 0)}
)

moveUp:Play()

-- Tween size (scale)
local scaleInfo = TweenInfo.new(0.5, Enum.EasingStyle.Back, Enum.EasingDirection.Out)
local scaleUp = TweenService:Create(part, scaleInfo, {Size = part.Size * 2})
scaleUp:Play()

-- Tween color
local colorInfo = TweenInfo.new(1, Enum.EasingStyle.Linear)
local colorTween = TweenService:Create(
  part,
  colorInfo,
  {Color = Color3.fromRGB(255, 0, 0)}
)

-- Button click triggers animation
button.MouseButton1Click:Connect(function()
  colorTween:Play()
end)

-- Listen to tween completion
colorTween.Completed:Connect(function(playbackState)
  if playbackState == Enum.PlaybackState.Completed then
    print("Animation finished!")
  end
end)`}
            </pre>
          </div>
        </div>
      </section>

      {/* RAYCASTING SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-indigo-300 mb-4">9. Raycasting — Detection & Line of Sight</h3>
        <div className="space-y-4">
          <p className="text-slate-300 text-sm">
            Raycasting mengirim invisible ray dari satu point ke arah tertentu dan detect collision. Berguna untuk detect apa yang pemain lihat, gunshots, etc.
          </p>
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">RAYCAST FOR DETECTION (SERVER SCRIPT)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`local Players = game:GetService("Players")

-- Function: Raycast from point to direction
local function raycast(origin, direction, maxDistance, ignoreList)
  local raycastParams = RaycastParams.new()
  raycastParams.FilterType = Enum.RaycastFilterType.Blacklist
  raycastParams.FilterDescendantsInstances = ignoreList or {}
  
  local rayResult = workspace:Raycast(origin, direction * maxDistance, raycastParams)
  return rayResult
end

-- Function: Check if player can see target
local function canSeeTarget(player, target)
  local char = player.Character
  if not char then return false end
  
  local head = char:FindFirstChild("Head")
  local targetPos = target:FindFirstChild("HumanoidRootPart")
  
  if not head or not targetPos then return false end
  
  local direction = (targetPos.Position - head.Position).Unit
  local distance = (targetPos.Position - head.Position).Magnitude
  
  local rayResult = raycast(head.Position, direction, distance, {char})
  
  -- If raycast hit target, can see it
  if rayResult and rayResult.Instance:IsDescendantOf(target) then
    return true
  end
  return false
end

-- Example: AI enemy detects if it can see player
Players.PlayerAdded:Connect(function(player)
  player.CharacterAdded:Connect(function(character)
    -- Check every 0.5 seconds if player visible
    while character.Parent do
      local otherPlayers = Players:GetPlayers()
      for _, otherPlayer in ipairs(otherPlayers) do
        if otherPlayer ~= player and otherPlayer.Character then
          if canSeeTarget(player, otherPlayer.Character) then
            print(player.Name .. " can see " .. otherPlayer.Name)
          end
        end
      end
      wait(0.5)
    end
  end)
end)`}
            </pre>
          </div>
        </div>
      </section>

      {/* TABLES & DATA STRUCTURES SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-teal-300 mb-4">10. Tables & Data Structures — Organize Data</h3>
        <div className="space-y-4">
          <p className="text-slate-300 text-sm">
            Tables adalah struktur data yang store multiple values. Bisa array (indexed), dictionary (key-value), atau kombinasi.
          </p>
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">TABLES: ARRAYS, DICTS, LOOPS</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`-- Array: indexed table (1-based indexing in Lua)
local fruits = {"apple", "banana", "orange"}
print(fruits[1])  -- Output: apple
table.insert(fruits, "grape")  -- Add to end
table.remove(fruits, 2)  -- Remove at index 2

-- Dictionary: key-value pairs
local player = {
  name = "Zane",
  level = 10,
  health = 100,
  inventory = {"sword", "shield"}
}

print(player.name)  -- Output: Zane
print(player["level"])  -- Output: 10
player.coins = 500  -- Add new property

-- Loop through array
for i, fruit in ipairs(fruits) do
  print(i .. ": " .. fruit)
end

-- Loop through dictionary
for key, value in pairs(player) do
  print(key .. " = " .. tostring(value))
end

-- Nested tables (table inside table)
local game_data = {
  players = {
    {name = "Alice", level = 5},
    {name = "Bob", level = 10}
  },
  settings = {
    difficulty = "hard",
    maxPlayers = 10
  }
}

print(game_data.players[1].name)  -- Output: Alice

-- Table functions
local numbers = {1, 2, 3, 4, 5}
table.insert(numbers, 6)  -- Add to end
local popped = table.remove(numbers)  -- Remove last
print(#numbers)  -- Length operator: 5

-- Find in table
local function findInTable(tbl, value)
  for _, v in ipairs(tbl) do
    if v == value then
      return true
    end
  end
  return false
end

if findInTable(fruits, "apple") then
  print("Found apple!")
end`}
            </pre>
          </div>
        </div>
      </section>

      {/* ERROR HANDLING SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-pink-300 mb-4">11. Error Handling & Debugging</h3>
        <div className="space-y-4">
          <p className="text-slate-300 text-sm">
            Errors terjadi saat code melakukan operasi invalid. Gunakan pcall (protected call) untuk catch errors tanpa crash.
          </p>
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 mb-2">ERROR HANDLING & DEBUGGING</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`-- pcall: Protected call (catch errors)
local function riskyOperation()
  local part = workspace:WaitForChild("NonExistent")  -- Will fail
  return part.Position
end

local success, result = pcall(riskyOperation)
if success then
  print("Operation successful: " .. tostring(result))
else
  print("Operation failed: " .. result)  -- result is error message
end

-- Better: use FindFirstChild to avoid error
local part = workspace:FindFirstChild("MyPart")
if part then
  print("Part found: " .. part.Name)
else
  warn("Part not found!")  -- Use warn for warnings
end

-- Debugging with print and assert
local function divide(a, b)
  assert(b ~= 0, "Cannot divide by zero!")
  return a / b
end

local result = divide(10, 2)
print("Result: " .. result)

-- Try: divide(10, 0)  -- Will error with custom message

-- Using error for custom errors
local function validateHealth(health)
  if health < 0 then
    error("Health cannot be negative!")
  end
  if health > 100 then
    error("Health exceeds max!")
  end
  return health
end

-- Debug with breakpoints in editor
-- Or use print statements to trace execution
local function complexFunction()
  print("Step 1: Starting")
  local data = {1, 2, 3}
  print("Step 2: Data created: " .. #data)
  
  for i, v in ipairs(data) do
    print("Step 3." .. i .. ": Processing value " .. v)
  end
  
  print("Step 4: Complete")
end

complexFunction()`}
            </pre>
          </div>
        </div>
      </section>

      {/* COMMON PATTERNS SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-green-300 mb-4">12. Common Patterns & Anti-Patterns</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-white mb-2">❌ ANTI-PATTERNS (Jangan lakukan!)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`-- BAD: Infinite loop without break
while true do
  print("This will freeze the game!")
end

-- BAD: Forgetting to disconnect connections
part.Touched:Connect(function(hit)
  print("Touched!")
end)  -- If this runs many times, connections accumulate (memory leak)

-- BAD: Trusting client input without validation
game.ReplicatedStorage.DamageEvent.OnServerEvent:Connect(function(player, damage)
  player.Character.Humanoid:TakeDamage(damage)  -- Client can send 999999 damage!
end)

-- BAD: Not handling nil
local part = workspace:FindFirstChild("NonExistent")
print(part.Position)  -- Error: part is nil!

-- BAD: Modifying table while looping
local items = {1, 2, 3, 4, 5}
for i, item in ipairs(items) do
  if item == 3 then
    table.remove(items, i)  -- Causes unpredictable behavior!
  end
end`}
            </pre>
          </div>
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-xs font-semibold text-white mb-2">✅ BEST PRACTICES (Lakukan ini!)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`-- GOOD: Use while with break condition
local count = 0
while count < 10 do
  print("Count: " .. count)
  count = count + 1
end

-- GOOD: Store connection and disconnect when done
local connection = part.Touched:Connect(function(hit)
  print("Touched!")
end)
-- Later:
connection:Disconnect()

-- GOOD: Validate input on server
game.ReplicatedStorage.DamageEvent.OnServerEvent:Connect(function(player, damage)
  if damage > 0 and damage <= 100 then  -- Validate range
    player.Character.Humanoid:TakeDamage(damage)
  end
end)

-- GOOD: Check if object exists before using
local part = workspace:FindFirstChild("MyPart")
if part then
  print(part.Position)
else
  warn("Part not found!")
end

-- GOOD: Collect items to remove, then remove them
local items = {1, 2, 3, 4, 5}
local toRemove = {}
for i, item in ipairs(items) do
  if item == 3 then
    table.insert(toRemove, i)
  end
end
for i = #toRemove, 1, -1 do  -- Remove in reverse order
  table.remove(items, toRemove[i])
end`}
            </pre>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-[1rem] border border-cyan-500/30 bg-cyan-500/10 p-6">
        <h3 className="text-lg font-semibold text-cyan-300 mb-3">📥 Download Resources & Join Community</h3>
        <p className="text-slate-300 mb-5">Akses library, template, dan asset siap pakai untuk mempercepat development Roblox kamu.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/free-asset"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
          >
            📦 Download RBXM Assets
          </a>
          <a
            href="https://discord.gg/kVbh6bKvfd"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            💬 Join Discord Community
          </a>
        </div>
      </section>

      {/* RESOURCES SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">📚 Resources & Next Steps</h3>
        <div className="space-y-3 text-slate-300 text-sm">
          <p>
            <strong>Belajar Lebih Lanjut:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Baca dokumentasi Roblox API di <code>api.roblox.com</code></li>
            <li>Coba game-game sukses di Roblox untuk lihat mekanik</li>
            <li>Join Roblox Developer Forum untuk tanya jawab</li>
            <li>Ikuti tutorial YouTube dari developer berpengalaman</li>
            <li>Praktek dengan membuat game kecil dahulu (e.g., simple obstacle course)</li>
          </ul>
          <p className="mt-4">
            <strong>Debugging Tips:</strong> Selalu monitor Output window di Studio. Gunakan <code>print()</code> untuk trace execution. Gunakan "Find" untuk search di semua scripts.
          </p>
        </div>
      </section>
    </div>
  );
}
