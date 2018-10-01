# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

Question.destroy_all
Answer.destroy_all


questions = [
    {
        content: 'What is Ron\'s Favorite Hobby?',
        correct: 'Painting',
        other:[ 'Skydiving', 'Granite' ]
    },
    {
        content: 'What is Melvin\'s Pet Rock?',
        correct: 'Shale',
        other:[ 'Lime Stone', 'Obsidian', 'Marble' ]
    },
    {
        content: 'Which Koala has a pet marble?',
        correct: 'Gertrude',
        other:[ 'Helga', 'Melvin' ]
    },
    {
        content: 'What is Gertrude\'s Favorite Hobby?',
        correct: 'Kickboxing',
        other:[ 'Programming', 'Sleeping' ]
    },
    {
        content: 'What is Hela\'s Favorite Hobby?',
        correct: 'Skydiving',
        other:[ 'Kickboxing', 'Drinking milkshakes where thick = "true"' ]
    }
]

questions.each do | question_hash |
    question = Question.create({ content:question_hash[:content] })
    question.correct_answer = Answer.create({ content: question_hash[:correct], question:question})
    question.answers = [ question.correct_answer ]
    question_hash[:other].each do | answer |
        question.answers << Answer.new({ content:answer, question: question })
    end
    question.save
end