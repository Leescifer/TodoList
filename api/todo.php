<?php
require_once './config.php'; // Include the database configuration

// Get the action from the request
$action = $_GET['action'] ?? null;

header('Content-Type: application/json'); // Ensure the response is JSON

try {
    switch ($action) {
        case 'add':
            // Handle adding a todo
            $data = json_decode(file_get_contents('php://input'), true);
            $todoText = $data['todoText'] ?? '';

            if (!empty($todoText) && !ctype_space($todoText)) {
                $stmt = $conn->prepare("INSERT INTO todos (text) VALUES (:text)");
                $stmt->execute(['text' => $todoText]);
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['success' => false, 'error' => 'Invalid todo text']);
            }
            break;

        case 'get':
            // Handle retrieving todos
            $stmt = $conn->query("SELECT * FROM todos");
            $todos = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($todos);
            break;

        case 'update':
            // Handle updating a todo
            $data = json_decode(file_get_contents('php://input'), true);
            $id = $data['id'] ?? null;
            $completed = $data['completed'] ?? null;

            if ($id !== null && $completed !== null) {
                $stmt = $conn->prepare("UPDATE todos SET completed = :completed WHERE id = :id");
                $stmt->execute(['completed' => (bool)$completed, 'id' => $id]);
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['success' => false, 'error' => 'Invalid data']);
            }
            break;

        case 'delete':
            // Handle deleting a todo
            $data = json_decode(file_get_contents('php://input'), true);
            $id = $data['id'] ?? null;

            if ($id !== null) {
                $stmt = $conn->prepare("DELETE FROM todos WHERE id = :id");
                $stmt->execute(['id' => $id]);
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['success' => false, 'error' => 'Invalid ID']);
            }
            break;

        default:
            echo json_encode(['success' => false, 'error' => 'Invalid action']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
