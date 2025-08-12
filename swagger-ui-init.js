
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "info": {
      "title": "IQED Admin API",
      "version": "3.0.0",
      "description": "Auto-generated API docs for your Express backend"
    },
    "servers": [
      {
        "url": "https://iqed-backend-v3.onrender.com"
      }
    ],
    "paths": {
      "/api/v3/admin/login": {
        "post": {
          "summary": "Admin sign in",
          "tags": [
            "Basic"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "email",
                    "password"
                  ],
                  "properties": {
                    "email": {
                      "type": "string",
                      "example": "adminexample.com"
                    },
                    "password": {
                      "type": "string",
                      "example": "yourAdminPassword"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Authentication successful",
              "content": {
                "application/json": {
                  "example": {
                    "message": "Authentication successful",
                    "token": "your.jwt.token"
                  }
                }
              }
            },
            "400": {
              "description": "Email and password are required"
            },
            "404": {
              "description": "Invalid password"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/getAnalysis": {
        "get": {
          "summary": "Get user analysis data",
          "tags": [
            "Basic"
          ],
          "responses": {
            "200": {
              "description": "Successful response with analysis statistics",
              "content": {
                "application/json": {
                  "example": {
                    "ActiveUsersCount": 187,
                    "TotalUsersCount": 697,
                    "TotalQuestionCount": 19030,
                    "TotalQuizSessionCount": 1104,
                    "CompletedQuizSessionCount": 598,
                    "TotalIQSessionCount": 281,
                    "CompletedIQSessionCount": 56,
                    "TotalBugCount": 21,
                    "UserAddedCount_Last7Days": 21,
                    "UserAddedCount_Previous7Days": 26
                  }
                }
              }
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/generatequestions": {
        "post": {
          "summary": "Generate AI-based math questions",
          "tags": [
            "Testing"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "topic",
                    "difficulty",
                    "questionType",
                    "numQuestions"
                  ],
                  "properties": {
                    "topic": {
                      "type": "string",
                      "example": "Algebra"
                    },
                    "difficulty": {
                      "type": "string",
                      "example": "Medium"
                    },
                    "questionType": {
                      "type": "string",
                      "example": "MCQ"
                    },
                    "numQuestions": {
                      "type": "integer",
                      "example": 5
                    },
                    "id": {
                      "type": "string",
                      "example": "topicid"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Generated questions successfully",
              "content": {
                "application/json": {
                  "example": [
                    {
                      "question": "What is 2 + 2?",
                      "options": {
                        "A": 3,
                        "B": 4,
                        "C": 5,
                        "D": 6
                      },
                      "correctAnswer": "B"
                    }
                  ]
                }
              }
            },
            "400": {
              "description": "Missing required query parameters"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/challengeCreate": {
        "post": {
          "summary": "Create a new challenge",
          "tags": [
            "Challenge"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "required": [
                    "sponsoreName",
                    "title",
                    "Topic",
                    "TestTime",
                    "eligibleGem",
                    "participantsCount",
                    "productName",
                    "description",
                    "QuestionCount",
                    "banner"
                  ],
                  "properties": {
                    "sponsoreName": {
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    },
                    "Topic": {
                      "type": "string"
                    },
                    "TestTime": {
                      "type": "number"
                    },
                    "eligibleGem": {
                      "type": "number"
                    },
                    "participantsCount": {
                      "type": "number"
                    },
                    "productName": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    },
                    "QuestionCount": {
                      "type": "number"
                    },
                    "banner": {
                      "type": "string",
                      "format": "binary"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Challenge created successfully"
            },
            "400": {
              "description": "Missing required fields or upload error"
            }
          }
        }
      },
      "/api/v3/admin/challenge": {
        "get": {
          "summary": "Get all challenges",
          "tags": [
            "Challenge"
          ],
          "responses": {
            "200": {
              "description": "A list of all challenges",
              "content": {
                "application/json": {
                  "example": {
                    "success": true,
                    "challenges": [
                      {
                        "_id": "6123abc456",
                        "title": "Math Master Challenge",
                        "banner": "https://s3.amazonaws.com/...",
                        "Topic": {
                          "_id": "789xyz",
                          "name": "Algebra"
                        },
                        "participantsCount": 50
                      }
                    ]
                  }
                }
              }
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/challenge/{id}": {
        "get": {
          "summary": "Get challenge by ID",
          "tags": [
            "Challenge"
          ],
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "type": "string"
              },
              "description": "Challenge ID"
            }
          ],
          "responses": {
            "200": {
              "description": "Challenge found",
              "content": {
                "application/json": {
                  "example": {
                    "success": true,
                    "challenges": {
                      "_id": "123abc",
                      "title": "Challenge Title",
                      "banner": "https://s3.amazonaws.com/..."
                    }
                  }
                }
              }
            },
            "404": {
              "description": "Challenge not found"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/challenge/delete": {
        "delete": {
          "summary": "Delete a challenge by ID",
          "tags": [
            "Challenge"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "challengeId"
                  ],
                  "properties": {
                    "challengeId": {
                      "type": "string",
                      "example": "64d3a823fcd6d7eaa091f1a1"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Challenge deleted successfully"
            },
            "400": {
              "description": "Error while deleting challenge"
            },
            "404": {
              "description": "Challenge or banner not found"
            }
          }
        }
      },
      "/api/v3/admin/orders": {
        "post": {
          "summary": "Create a new order for a challenge",
          "tags": [
            "Order"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "Challenge",
                    "shippingAddress"
                  ],
                  "properties": {
                    "Challenge": {
                      "type": "string",
                      "example": "64f1c9438fae6c32183b9923"
                    },
                    "shippingAddress": {
                      "type": "object",
                      "properties": {
                        "fullName": {
                          "type": "string"
                        },
                        "address": {
                          "type": "string"
                        },
                        "area": {
                          "type": "string"
                        },
                        "city": {
                          "type": "string"
                        },
                        "state": {
                          "type": "string"
                        },
                        "pincode": {
                          "type": "string"
                        },
                        "country": {
                          "type": "string"
                        },
                        "mobileNumber": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Order created successfully"
            },
            "500": {
              "description": "Server error while creating order"
            }
          }
        },
        "get": {
          "summary": "Get all orders (admin view)",
          "tags": [
            "Order"
          ],
          "responses": {
            "200": {
              "description": "List of all orders"
            },
            "500": {
              "description": "Server error while fetching orders"
            }
          }
        }
      },
      "/api/v3/admin/orders/{id}": {
        "get": {
          "summary": "Get a specific order by ID",
          "tags": [
            "Order"
          ],
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "description": "Order ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Order retrieved successfully"
            },
            "404": {
              "description": "Order not found"
            },
            "500": {
              "description": "Server error while fetching order"
            }
          }
        },
        "delete": {
          "summary": "Delete an order by ID",
          "tags": [
            "Order"
          ],
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "description": "Order ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Order deleted successfully"
            },
            "404": {
              "description": "Order not found"
            },
            "500": {
              "description": "Server error while deleting order"
            }
          }
        }
      },
      "/api/v3/admin/orders/{id}/status": {
        "put": {
          "summary": "Update order status",
          "tags": [
            "Order"
          ],
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "description": "Order ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "orderStatus": {
                      "type": "string",
                      "example": "Shipped"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Order status updated successfully"
            },
            "404": {
              "description": "Order not found"
            },
            "500": {
              "description": "Server error while updating order"
            }
          }
        }
      },
      "/api/v3/admin/GetCareerLevels": {
        "get": {
          "summary": "Get all levels, lessons, and topics from the latest live course",
          "tags": [
            "Course"
          ],
          "responses": {
            "200": {
              "description": "Successfully retrieved course levels"
            },
            "500": {
              "description": "Server error while fetching career paths"
            }
          }
        }
      },
      "/api/v3/admin/GetCareerDraftLevels": {
        "get": {
          "summary": "Get the draft course levels or create a new one if it doesn't exist",
          "tags": [
            "Course"
          ],
          "responses": {
            "200": {
              "description": "Draft course levels retrieved (or created) successfully"
            },
            "500": {
              "description": "Server error while fetching or creating draft career path"
            }
          }
        }
      },
      "/api/v3/admin/CreateNewLevel": {
        "post": {
          "summary": "Add a new level with lessons and topics to a draft course",
          "tags": [
            "Course"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "DraftID",
                    "Leveldata"
                  ],
                  "properties": {
                    "DraftID": {
                      "type": "string",
                      "example": "64f1c9438fae6c32183b9923"
                    },
                    "Leveldata": {
                      "type": "object",
                      "properties": {
                        "LevelName": {
                          "type": "string"
                        },
                        "description": {
                          "type": "string"
                        },
                        "Lession": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "description": {
                                "type": "string"
                              },
                              "topics": {
                                "type": "array",
                                "items": {
                                  "type": "string"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "New level created successfully"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/CreateEditLevel": {
        "put": {
          "summary": "Edit a level and its associated lessons",
          "tags": [
            "Course"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "LevelID",
                    "Leveldata"
                  ],
                  "properties": {
                    "LevelID": {
                      "type": "string"
                    },
                    "Leveldata": {
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string"
                        },
                        "description": {
                          "type": "string"
                        },
                        "lessons": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "_id": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              },
                              "description": {
                                "type": "string"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Level and lessons updated successfully"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/EditLevelOrder": {
        "put": {
          "summary": "Reorder levels in a draft course",
          "tags": [
            "Course"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "DraftID",
                    "Levels"
                  ],
                  "properties": {
                    "DraftID": {
                      "type": "string"
                    },
                    "Levels": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Level order updated successfully"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/PublishCareer": {
        "post": {
          "summary": "Publish a draft course and make it live",
          "tags": [
            "Course"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "DraftID"
                  ],
                  "properties": {
                    "DraftID": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Course published successfully"
            },
            "500": {
              "description": "Server error while publishing course"
            }
          }
        }
      },
      "/api/v3/admin/gamequestions/add": {
        "post": {
          "summary": "Insert bulk game questions",
          "tags": [
            "Game‑Questions"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Game Questions posted successfully!"
            },
            "400": {
              "description": "Invalid input"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/question": {
        "post": {
          "summary": "Insert bulk questions from admin",
          "tags": [
            "Questions"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Questions posted successfully!"
            },
            "400": {
              "description": "Invalid input"
            },
            "500": {
              "description": "Server error"
            }
          }
        },
        "get": {
          "summary": "Get all questions with pagination and optional topic filtering",
          "tags": [
            "Questions"
          ],
          "parameters": [
            {
              "in": "query",
              "name": "page",
              "schema": {
                "type": "integer"
              },
              "default": 1
            },
            {
              "in": "query",
              "name": "limit",
              "schema": {
                "type": "integer"
              },
              "default": 10
            },
            {
              "in": "query",
              "name": "tid",
              "schema": {
                "type": "string"
              },
              "description": "Comma-separated topic IDs"
            }
          ],
          "responses": {
            "200": {
              "description": "Questions fetched successfully"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/AdvanceQuestion": {
        "post": {
          "summary": "Insert a single advanced question with images",
          "tags": [
            "Questions"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "required": [
                    "question"
                  ],
                  "properties": {
                    "question": {
                      "type": "string",
                      "description": "JSON string of the question data"
                    },
                    "questionImage": {
                      "type": "string",
                      "format": "binary"
                    },
                    "optionImages": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "format": "binary"
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Question posted successfully!"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/question/delete": {
        "delete": {
          "summary": "Delete multiple questions and associated images",
          "tags": [
            "Questions"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "ids"
                  ],
                  "properties": {
                    "ids": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Questions and images deleted successfully"
            },
            "400": {
              "description": "Invalid request"
            },
            "404": {
              "description": "Questions not found"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/topics": {
        "post": {
          "summary": "Create multiple topics",
          "tags": [
            "Topics"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "name"
                    ],
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "description": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Topics created successfully"
            },
            "400": {
              "description": "Validation or Mongo error"
            },
            "500": {
              "description": "Server error"
            }
          }
        },
        "get": {
          "summary": "Get all topics",
          "tags": [
            "Topics"
          ],
          "responses": {
            "200": {
              "description": "Topics fetched successfully"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/iqquestion": {
        "post": {
          "summary": "Insert multiple IQ questions",
          "tags": [
            "IQ Questions"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "array"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "IQ Questions posted successfully"
            },
            "400": {
              "description": "Invalid input format"
            },
            "500": {
              "description": "Server error"
            }
          }
        },
        "get": {
          "summary": "Get all IQ questions with pagination",
          "tags": [
            "IQ Questions"
          ],
          "parameters": [
            {
              "in": "query",
              "name": "page",
              "schema": {
                "type": "integer"
              },
              "default": 1
            },
            {
              "in": "query",
              "name": "limit",
              "schema": {
                "type": "integer"
              },
              "default": 10
            },
            {
              "in": "query",
              "name": "tid",
              "schema": {
                "type": "string"
              },
              "description": "Comma-separated topic IDs"
            }
          ],
          "responses": {
            "200": {
              "description": "IQ Questions fetched successfully"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/iqAdvanceQuestion": {
        "post": {
          "summary": "Insert an advanced IQ question (with image upload)",
          "tags": [
            "IQ Questions"
          ],
          "consumes": [
            "multipart/form-data"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "question": {
                      "type": "string",
                      "description": "JSON string of the question object"
                    },
                    "questionImage": {
                      "type": "string",
                      "format": "binary"
                    },
                    "optionImages": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "format": "binary"
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "IQ Question posted successfully"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/iqquestion/delete": {
        "delete": {
          "summary": "Delete multiple IQ questions",
          "tags": [
            "IQ Questions"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "ids"
                  ],
                  "properties": {
                    "ids": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "IQ Questions and associated images deleted successfully"
            },
            "400": {
              "description": "No IDs provided"
            },
            "404": {
              "description": "Questions not found"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/IQTest": {
        "get": {
          "summary": "Get all completed IQ test sessions",
          "tags": [
            "IQTest"
          ],
          "parameters": [
            {
              "in": "query",
              "name": "page",
              "schema": {
                "type": "integer",
                "default": 1
              },
              "description": "Page number for pagination"
            },
            {
              "in": "query",
              "name": "limit",
              "schema": {
                "type": "integer"
              },
              "description": "Number of items per page"
            },
            {
              "in": "query",
              "name": "search",
              "schema": {
                "type": "string"
              },
              "description": "Search by name or email"
            }
          ],
          "responses": {
            "200": {
              "description": "List of IQ test sessions",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "IQ_Test": {
                        "type": "array",
                        "items": {
                          "type": "object"
                        }
                      },
                      "pagination": {
                        "type": "object",
                        "properties": {
                          "currentPage": {
                            "type": "integer"
                          },
                          "totalPages": {
                            "type": "integer"
                          },
                          "totalSessions": {
                            "type": "integer"
                          },
                          "perPage": {
                            "type": "integer"
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "404": {
              "description": "No sessions found"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/users/all": {
        "get": {
          "summary": "Get all users with pagination and filtering",
          "tags": [
            "Users"
          ],
          "parameters": [
            {
              "in": "query",
              "name": "page",
              "schema": {
                "type": "integer",
                "default": 1
              },
              "description": "Page number for pagination"
            },
            {
              "in": "query",
              "name": "limit",
              "schema": {
                "type": "integer"
              },
              "description": "Number of users per page"
            },
            {
              "in": "query",
              "name": "search",
              "schema": {
                "type": "string"
              },
              "description": "Search users by name or email"
            },
            {
              "in": "query",
              "name": "isActive",
              "schema": {
                "type": "string",
                "enum": [
                  true,
                  false
                ]
              },
              "description": "Filter users by active status"
            }
          ],
          "responses": {
            "200": {
              "description": "List of users",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "users": {
                        "type": "array",
                        "items": null
                      },
                      "pagination": {
                        "type": "object",
                        "properties": {
                          "currentPage": {
                            "type": "integer"
                          },
                          "totalPages": {
                            "type": "integer"
                          },
                          "totalUsers": {
                            "type": "integer"
                          },
                          "perPage": {
                            "type": "integer"
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/user/{id}": {
        "get": {
          "summary": "Get user by ID with detailed progress",
          "tags": [
            "Users"
          ],
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "type": "string"
              },
              "description": "User ID"
            }
          ],
          "responses": {
            "200": {
              "description": "User data with progress",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string"
                      },
                      "data": {
                        "allOf": [
                          {
                            "type": "object",
                            "properties": {
                              "profileImage": {
                                "type": "string"
                              },
                              "isActive": {
                                "type": "boolean"
                              },
                              "progress": {
                                "type": "object"
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              }
            },
            "404": {
              "description": "User not found"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/users/update": {
        "put": {
          "summary": "Update user profile by admin",
          "tags": [
            "Users"
          ],
          "requestBody": {
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "userId": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string"
                    },
                    "userName": {
                      "type": "string"
                    },
                    "email": {
                      "type": "string"
                    },
                    "age": {
                      "type": "integer"
                    },
                    "mobileNumber": {
                      "type": "string"
                    },
                    "parentsName": {
                      "type": "string"
                    },
                    "schoolName": {
                      "type": "string"
                    },
                    "grade": {
                      "type": "string"
                    },
                    "isPaid": {
                      "type": "boolean"
                    },
                    "file": {
                      "type": "string",
                      "format": "binary"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "User profile updated successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string"
                      },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "profile": {
                            "type": "string"
                          },
                          "username": {
                            "type": "string"
                          },
                          "age": {
                            "type": "integer"
                          },
                          "schoolname": {
                            "type": "string"
                          },
                          "grade": {
                            "type": "string"
                          },
                          "mobileNumber": {
                            "type": "string"
                          },
                          "earnings": {
                            "type": "object"
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "404": {
              "description": "User not found"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/api/v3/admin/users/delete": {
        "delete": {
          "summary": "Delete multiple users by IDs",
          "tags": [
            "Users"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "userIds": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    }
                  },
                  "required": [
                    "userIds"
                  ]
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Users deleted successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string"
                      },
                      "deletedCount": {
                        "type": "integer"
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Invalid user IDs"
            },
            "404": {
              "description": "No users found to delete"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      }
    },
    "components": {},
    "tags": []
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.preauthorizeApiKey) {
    const key = customOptions.preauthorizeApiKey.authDefinitionKey;
    const value = customOptions.preauthorizeApiKey.apiKeyValue;
    if (!!key && !!value) {
      const pid = setInterval(() => {
        const authorized = ui.preauthorizeApiKey(key, value);
        if(!!authorized) clearInterval(pid);
      }, 500)

    }
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
