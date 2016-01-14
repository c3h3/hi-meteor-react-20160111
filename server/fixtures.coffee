sampleTasks = [
  { _id: "1", text: "This is task 1" },
  { _id: "2", text: "This is task 2" },
  { _id: "3", text: "This is task 3" }
]


if Tasks.find().count() is 0
	Tasks.insert task for task in sampleTasks