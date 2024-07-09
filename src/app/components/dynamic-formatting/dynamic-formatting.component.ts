import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-formatting',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-formatting.component.html',
  styleUrl: './dynamic-formatting.component.scss'
})
export class DynamicFormattingComponent implements OnInit {

  public stuID: string; //学号
  public name: string;  //学生姓名
  public score: number; //学生成绩
  public passed: boolean; //是否通过

  public clasInfo = new ClassInfo('计算机2021-2', '杜春涛', 32);  //班级信息
  public myClass: string = '这是利用数据绑定显示的班级信息';
  public myUniversity = '这是利用属性绑定显示的学校信息';
  public myHTML: string = "<h2>我是一个html标签</h2>"; //带有HTML代码的属性

  public uniInfo = {  //定义对象类型的属性，不能使用Object类型
    uniName: '北方工业大学',
    stuNum: 24000,  //学生数量
    teacherNum: 1200  //教师数量
  }


  constructor() {   //构造函数
    this.stuID = '20210120';
    this.name = '张三';
    this.score = 93;  //学生成绩
    this.passed = this.score >= 60;   //成绩大于60分则通过
  }
  ngOnInit(): void {}
}

class ClassInfo {   //自定义班级信息类
  constructor(
    public className: string,
    public teacherName: string,
    public stuNum: number
  ){ }
}
