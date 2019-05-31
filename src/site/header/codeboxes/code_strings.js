const code_strings = [
`# Python

if __name__ == '__main__':
  print('Hello world!')`,

`// C/C++

#include <iostream>

int main(int argc, char** argv) {
  std::cout << "Hello world!" << std::endl;
  return 0;
};`,

`// Java

class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
  }
};`,

`# Perl

use strict;
use warnings;

print("Hello world!\\n");`,

`# Bash

echo "Hello world!"`,

`// JavaScript

console.log("Hello world!");`,
];

export default code_strings;
